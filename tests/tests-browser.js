'use strict';
// Teste real no Edge por Chrome DevTools Protocol; usa apenas módulos nativos do Node 22+.
const fs=require('node:fs'),path=require('node:path'),{spawn}=require('node:child_process'),{pathToFileURL}=require('node:url'),assert=require('node:assert/strict');
const D=require('../assets/js/data.js'),C=require('../assets/js/core.js');
const root=path.resolve(__dirname,'..'),results=path.join(__dirname,'results'),screenshots=path.join(__dirname,'screenshots'),edge='C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const pause=ms=>new Promise(r=>setTimeout(r,ms));let checks=0;const issues=[],covered=new Set(),paths=[];let ws,child; const keepAlive=setInterval(()=>{},1000); setTimeout(()=>{console.error("Tempo limite do teste do navegador");process.exit(2)},180000).unref();
function check(b,m){assert.ok(b,m);checks++;}
function correct(t){if(['number','slider'].includes(t.type))return t.answer;if(t.type==='choice')return t.options.find(o=>C.validate(t,o.id)).id;if(['order','multi'].includes(t.type))return t.expected;return Object.fromEntries(t.pairs.map(p=>[p.id,p.id]));}
function wrong(t){if(['number','slider'].includes(t.type))return 0;if(t.type==='choice')return t.options.find(o=>!C.validate(t,o.id)).id;if(t.type==='multi')return [t.options.find(o=>!t.expected.includes(o.id)).id];if(t.type==='order')return t.items.map(i=>i.id);return Object.fromEntries(t.pairs.map(p=>[p.id,'linear']));}
async function run(){ fs.mkdirSync(results,{recursive:true});fs.mkdirSync(screenshots,{recursive:true}); console.log("Iniciando Edge...");
 const profile=path.join(results,'.edge-tests-'+Date.now());fs.mkdirSync(profile);
 child=spawn(edge,['--headless=new','--disable-gpu','--in-process-gpu','--no-sandbox','--disable-gpu-sandbox','--no-first-run','--no-default-browser-check','--remote-debugging-port=0','--user-data-dir='+profile,'about:blank'],{windowsHide:true,stdio:['ignore','ignore','pipe']});
 child.stderr.on("data",d=>fs.appendFileSync(path.join(results,"edge-debug.log"),d));child.on("exit",(c,s)=>console.log("Edge terminou",c,s)); let port;for(let i=0;i<100;i++){try{port=fs.readFileSync(path.join(profile,'DevToolsActivePort'),'utf8').split('\n')[0];break;}catch{await pause(100);}}
 console.log("Porta CDP:",port); if(!port)throw Error('Edge não expôs o DevToolsActivePort.');
 console.log("Consultando abas..."); const tabs=await(await fetch(`http://127.0.0.1:${port}/json/list`)).json();ws=new WebSocket(tabs.find(t=>t.type==='page').webSocketDebuggerUrl);await new Promise((r,j)=>{ws.onopen=r;ws.onerror=j;});
 console.log("WebSocket conectado"); let seq=0;const pending=new Map();ws.onclose=e=>{console.log("CDP fechado",e.code,e.reason); if(pending.size){for(const p of pending.values())p.reject(Error("Conexão CDP encerrada inesperadamente"));}}; ws.onmessage=e=>{const m=JSON.parse(e.data);if(m.id){const p=pending.get(m.id);pending.delete(m.id);m.error?p.reject(Error(m.error.message)):p.resolve(m.result);}else if(m.method==='Runtime.exceptionThrown')issues.push(m.params.exceptionDetails.text+' '+(m.params.exceptionDetails.exception?.description||''));};
 const call=(method,params={})=>new Promise((resolve,reject)=>{const id=++seq;pending.set(id,{resolve,reject});ws.send(JSON.stringify({id,method,params}));});
 const ev=async expression=>{const r=await call('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(r.exceptionDetails.exception?.description||r.exceptionDetails.text);return r.result.value;};
 const click=async selector=>{check(await ev(`Boolean(document.querySelector(${JSON.stringify(selector)}))`),'controle existe '+selector);await ev(`document.querySelector(${JSON.stringify(selector)}).focus();document.querySelector(${JSON.stringify(selector)}).click()`);await pause(40);};
 const snapshot=()=>ev('ZeroTest.snapshot()');
 const waitLoaded=async()=>{for(let i=0;i<80;i++){if(await ev("document.readyState==='complete'&&Boolean(window.ZeroTest)"))return;await pause(50);}throw Error('Página não carregou.');};
 const key=async(key,code,keyCode)=>{await call('Input.dispatchKeyEvent',{type:'keyDown',key,code,windowsVirtualKeyCode:keyCode,text:key==='Enter'?'\r':undefined});await call('Input.dispatchKeyEvent',{type:'keyUp',key,code,windowsVirtualKeyCode:keyCode});await pause(50);};
 const layouts=new Set();
 async function layout(label){if(layouts.has(label))return;layouts.add(label);for(const width of [320,360,390,430,768,1024,1440]){await call('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<500});await call('Emulation.setTouchEmulationEnabled',{enabled:width<500,maxTouchPoints:1});check(await ev('document.documentElement.scrollWidth<=window.innerWidth'),`layout sem overflow: ${label} / ${width}px`);if(width<500)check(await ev('Array.from(document.querySelectorAll("main button,.topbar button")).every(b=>{const r=b.getBoundingClientRect();return r.width===0||(r.width>=44&&r.height>=44)})'),`alvos de toque de pelo menos 44px: ${label} / ${width}px`);}await call('Emulation.setDeviceMetricsOverride',{width:1280,height:900,deviceScaleFactor:1,mobile:false});}
 await call('Runtime.enable');await call('Page.enable');
 const base=process.env.ZERO_TEST_URL||pathToFileURL(path.join(root,'index.html')).href;const url=base+(base.includes('?')?'&':'?')+'test=1';await call('Page.navigate',{url});await waitLoaded();await ev("localStorage.removeItem(ZeroTest.key)");await call('Page.reload');await waitLoaded();await pause(100);
 await call('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});
 await layout('menu');await call('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});const home=await call('Page.captureScreenshot',{format:'png'});fs.writeFileSync(path.join(screenshots,'preview-desktop.png'),Buffer.from(home.data,'base64'));
 await key('Tab','Tab',9);check(await ev("document.activeElement.dataset.action==='start'"),'Tab chega ao botão inicial');await key('Enter','Enter',13);check((await snapshot()).phase==='brief','Enter inicia jogo');
 await click('#pause');check(await ev("document.getElementById('modal').open"),'pausa abre');await key('Escape','Escape',27);check(!await ev("document.getElementById('modal').open"),'Escape fecha pausa');check(await ev("document.activeElement.id==='pause'"),'foco retorna à pausa');
 await click('[data-action="brief"]');await click('[data-action="journal"]');check(await ev("document.getElementById('modal').textContent.includes('Nenhuma pista')"),'diário inicial vazio');await click('#close-modal');
 await click('[data-action="instructions"]');check(await ev("document.getElementById('modal').textContent.includes('Salvamento:')"),'instruções completas');await click('#close-modal');await click('#audio');check(await ev("document.getElementById('audio').getAttribute('aria-pressed')==='true'"),'áudio liga');await click('#audio');
 await call('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});await pause(100);check(await ev('document.documentElement.scrollWidth<=window.innerWidth'),'sem overflow no celular');const mobile=await call('Page.captureScreenshot',{format:'png',captureBeyondViewport:true});fs.writeFileSync(path.join(screenshots,'preview-mobile.png'),Buffer.from(mobile.data,'base64'));
 await call('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});check(await ev("getComputedStyle(document.querySelector('.cityline')).animationName==='none'"),'movimento reduzido');await call('Emulation.setDeviceMetricsOverride',{width:1280,height:900,deviceScaleFactor:1,mobile:false});
 // Respostas são enviadas pelos controles visíveis, sem modificar o estado do jogo.
 async function fill(t,a){
 if(['number','slider'].includes(t.type)){await ev(`document.getElementById('answer').value=${JSON.stringify(a)};document.getElementById('answer').dispatchEvent(new Event('input',{bubbles:true}))`);}
 else if(t.type==='choice'){await click(`input[value="${a}"]`);}
 else if(t.type==='multi'){await ev("document.querySelectorAll('#challenge-form input:checked').forEach(i=>i.click())");for(const id of a)await click(`input[value="${id}"]`);}
 else if(t.type==='match'){await ev(`for(const [id,v]of Object.entries(${JSON.stringify(a)}))document.querySelector('[name="'+id+'"]').value=v`);}
 else if(t.type==='order'){for(let i=0;i<a.length;i++){for(let j=0;j<5;j++){const index=await ev(`Array.from(document.querySelectorAll('#order-list li')).findIndex(li=>li.querySelector('[data-move="${a[i]}"]'))`);if(index===i)break;await click(`[data-move="${a[i]}"][data-dir="-1"]`);}}}
 await click('#challenge-form button[type="submit"]');
 }
 async function newGame(){await click('#pause');await click('[data-action="restart"]');await click('[data-action="close"]');check((await snapshot())!==null,'cancelar reinício preserva');await click('#pause');await click('[data-action="restart"]');await click('[data-action="confirm-restart"]');check((await snapshot()).step===0&&(await snapshot()).score===0,'reinício confirmado');}
 let first=true;
 for(const route of ['plaza','tower'])for(const access of ['audit','isolate'])for(const policy of ['restore','offline','central']){
 if(!first)await newGame();else{await newGame();first=false;}let wrongCount=0;
 while(true){let s=await snapshot();if(s.phase==='ending'){await layout('final');check(s.logs.length===15,'15 desafios DOM');paths.push({route,access,policy,ending:s.ending});break;}
 if(s.phase==='brief'){await layout('abertura');await click('[data-action="brief"]');continue;}
 if(s.phase==='decision'){await layout(s.step===15?'destino':'decisão');const value=s.step===5?route:s.step===10?access:policy;await click(`[data-action="choose"][data-value="${value}"]`);check(await ev("document.getElementById('modal').open"),'confirmar decisão');await click('[data-action="confirm-choice"]');continue;}
 if(s.solved){await click('[data-action="next"]');continue;}
 const id=C.taskId(s),t=D.tasks[id];await layout(t.graph||t.type);
 if((id==='c2a'||id==='c3b')&&!layouts.has('journal-'+id)){layouts.add('journal-'+id);await click('[data-action="journal"]');check(await ev(`document.getElementById('modal').textContent.includes(${JSON.stringify(id==='c2a'?'01 · Origem':'04 · Bloco assinado')})`),'pistas anteriores visíveis no diário '+id);await click('#close-modal');}
 if(!covered.has(id)&&wrongCount<3){
 await fill(t,wrong(t));let bad=await snapshot();check(!bad.solved,'incorreta recusada '+id);check(await ev("Boolean(document.querySelector('.feedback:not(.good)'))"),'feedback incorreto '+id);check(bad.energy===s.energy-7,'energia incorreta '+id);
 await click('[data-action="hint"]');await click('[data-action="confirm-hint"]');check(await ev("Boolean(document.querySelector('.hint'))"),'dica visível '+id);check((await snapshot()).energy===bad.energy-4,'custo dica '+id);check(await ev("document.querySelector('[data-action=hint]').disabled"),'dica não pode duplicar '+id);
 covered.add(id);wrongCount++;
 }
 await fill(t,correct(t));s=await snapshot();check(s.solved,'resposta correta validada '+id);check(await ev("Boolean(document.querySelector('.feedback.good'))"),'feedback correto '+id);
 if(s.step===3){const before=JSON.stringify(s);await call('Page.reload');await waitLoaded();await click('[data-action="resume"]');check(JSON.stringify(await snapshot())===before,'salvamento real após recarregar');await click('#pause');await click('[data-action="menu"]');await click('[data-action="confirm-menu"]');await click('[data-action="resume"]');check(JSON.stringify(await snapshot())===before,'menu e retomada');}
 }
 }
 check(covered.size===Object.keys(D.tasks).length,'todos os 18 desafios testados com erro e dica');
 await newGame();await click('[data-action="brief"]');await fill(D.tasks.c1a,0);const old=await snapshot();await click('[data-action="cell"]');await click('[data-action="confirm-cell"]');let now=await snapshot();check(now.cells===old.cells-1&&now.energy===Math.min(100,old.energy+20),'inventário célula DOM');
 while((await snapshot()).phase!=='ending')await fill(D.tasks.c1a,0);check((await snapshot()).ending==='blackout','derrota DOM');
 // Interação real por teclado nos três primeiros formatos.
 await newGame();await click('[data-action="brief"]');await click('#answer');await call('Input.insertText',{text:'100'});await key('Enter','Enter',13);check((await snapshot()).solved,'número e envio por teclado');await click('[data-action="next"]');await click('input[value="a"]');await key('ArrowDown','ArrowDown',40);check(await ev('document.querySelector("input[value=b]").checked'),'seta troca alternativa de rádio');await key('Tab','Tab',9);check(await ev('document.activeElement.type==="submit"'),'Tab chega à verificação');await key('Enter','Enter',13);check((await snapshot()).solved,'rádio validado por teclado');await click('[data-action="next"]');await click('#answer');await key('End','End',35);for(let i=0;i<4;i++)await key('ArrowLeft','ArrowLeft',37);check(await ev('document.getElementById("answer").value==="800"'),'sensor ajustado com setas');await key('Tab','Tab',9);await key('Enter','Enter',13);check((await snapshot()).solved,'gráfico e sensor enviados por teclado');
 // Salvamento bloqueado: o usuário recebe aviso e pode continuar a sessão.
 await newGame();await ev("Storage.prototype.setItem=function(){throw new DOMException('Teste: bloqueado','QuotaExceededError')}");await click('[data-action="brief"]');check(await ev("document.getElementById('notice').textContent.includes('bloqueou')"),'fallback armazenamento');await call('Page.reload');await waitLoaded();
 check(issues.length===0,'nenhuma exceção JavaScript '+issues.join(';'));
 fs.writeFileSync(path.join(results,'test-results-browser.json'),JSON.stringify({date:new Date().toISOString(),status:'PASS',checks,incorrectAndHints:[...covered],paths,issues,viewport:[320,360,390,430,768,1024,1440],browser:'Microsoft Edge headless / CDP / '+new URL(url).protocol},null,2));
 console.log(`PASS navegador: ${checks} verificações; ${covered.size} desafios com erro/dica; ${paths.length} rotas; zero exceções.`);
 await call('Browser.close');ws.close();clearInterval(keepAlive);
}
run().catch(async e=>{console.error(e.stack);fs.writeFileSync(path.join(results,'test-results-browser-error.txt'),e.stack);try{if(ws?.readyState===1){ws.send(JSON.stringify({id:999999,method:'Browser.close'}));ws.close();}else child?.kill();}catch{}clearInterval(keepAlive);process.exitCode=1;});














