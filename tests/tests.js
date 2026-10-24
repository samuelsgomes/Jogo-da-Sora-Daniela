'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path');const D=require('../assets/js/data.js'),C=require('../assets/js/core.js');fs.mkdirSync(path.join(__dirname,'results'),{recursive:true});let checks=0;
function check(ok,msg){assert.ok(ok,msg);checks++;}
function answer(t){if(['number','slider'].includes(t.type))return t.answer;if(t.type==='choice')return t.options.find(o=>C.validate(t,o.id)).id;if(['order','multi'].includes(t.type))return [...t.expected];return Object.fromEntries(t.pairs.map(p=>[p.id,p.id]));}
function* permutations(a){if(a.length===0){yield [];return;}for(let i=0;i<a.length;i++)for(const p of permutations(a.filter((_,j)=>i!==j)))yield[a[i],...p];}
for(const [id,t] of Object.entries(D.tasks)){
 check(C.validate(t,answer(t)),id+' correta');check(!C.validate(t,null),id+' nula');check(Boolean(t.prompt&&t.solution&&t.hint&&t.line),id+' conteúdo');
 if(['number','slider'].includes(t.type)){check(!C.validate(t,t.answer+(t.tolerance||0)+1),id+' limite superior incorreto');check(!C.validate(t,t.answer-(t.tolerance||0)-1),id+' limite inferior incorreto');check(!C.validShape(t,NaN),id+' NaN');if(t.tolerance){check(C.validate(t,t.answer+t.tolerance),id+' tolerância superior');check(C.validate(t,t.answer-t.tolerance),id+' tolerância inferior');}}
 if(t.type==='choice')for(const o of t.options){const ok=C.validate(t,o.id);check(ok||Boolean(o.feedback),id+' feedback '+o.id);check(ok===(o.id===answer(t)),id+' alternativa '+o.id);}
 if(t.type==='multi')for(let mask=0;mask<2**t.options.length;mask++){const a=t.options.filter((_,i)=>mask&(1<<i)).map(o=>o.id);check(C.validate(t,a)===(a.length===t.expected.length&&t.expected.every(x=>a.includes(x))),id+' subconjunto '+mask);}
 if(t.type==='order')for(const a of permutations(t.expected))check(C.validate(t,a)===(a.join()===t.expected.join()),id+' permutação');
 if(t.type==='match')for(const a of t.options)for(const b of t.options)for(const c of t.options){const r=Object.fromEntries(t.pairs.map((p,i)=>[p.id,[a,b,c][i].id]));check(C.validate(t,r)===(a.id==='linear'&&b.id==='exponential'&&c.id==='logarithmic'),id+' associação');}
}
const independently={c1a:100+50*0,c1c:100*2**3,c2a:100*2**4,c2bt:50*2**3,c2d:800*(1-.25),c3ao:Math.log(1600/100)/Math.log(2),c3b:48/8};for(const [id,a]of Object.entries(independently))check(C.validate(D.tasks[id],a),id+' conferência independente');
function send(s,e){const r=C.apply(s,e);check(r.ok,'ação válida '+JSON.stringify(e));const re=C.restore(C.serialize(r.state));check(JSON.stringify(re)===JSON.stringify(r.state),'salvar/retomar '+e.type);return r.state;}
const paths=[];
for(const route of ['plaza','tower'])for(const access of ['audit','isolate'])for(const policy of ['restore','offline','central']){
 let s=C.fresh();while(s.phase!=='ending'){
 if(s.phase==='brief')s=send(s,{type:'brief'});
 else if(s.phase==='decision')s=send(s,{type:'decision',value:s.step===5?route:s.step===10?access:policy});
 else if(s.solved)s=send(s,{type:'next'});
 else s=send(s,{type:'answer',answer:answer(D.tasks[C.taskId(s)])});
 }
 check(s.logs.length===15,'15 terminais');check(s.score===1500,'pontuação perfeita');check(s.clues.length===5,'cinco pistas');check(s.ending===(policy==='offline'?'islands':policy==='central'?'guardian':route==='tower'&&access==='isolate'?'transition':'dawn'),'condição de final');
 paths.push({route,access,policy,ending:s.ending,energy:s.energy,score:s.score});
}
let s=C.fresh();check(!C.apply(s,{type:'next'}).ok,'avanço ilegal');check(C.restore('quebrado')===null,'JSON inválido');check(C.restore('{"version":9,"events":[]}')===null,'versão inválida');check(C.restore('{"version":1,"events":[{"type":"next"}]}')===null,'sequência inválida');
s=send(s,{type:'brief'});const before=JSON.stringify(s);check(!C.apply(s,{type:'answer',answer:''}).ok,'resposta vazia');check(JSON.stringify(s)===before,'entrada inválida preserva estado');s=send(s,{type:'hint'});const energy=s.energy;check(!C.apply(s,{type:'hint'}).ok,'dica duplicada recusada');check(s.energy===energy,'sem cobrança repetida');s=send(s,{type:'answer',answer:50});check(s.energy===69,'custo erro e dica');s=send(s,{type:'answer',answer:100});check(s.score===65,'pontuação com erro e dica');s=send(s,{type:'cell'});check(s.cells===1&&s.energy===92&&s.score===35,'célula e custo');check(!C.apply(s,{type:'answer',answer:100}).ok,'não pontuar duas vezes');
let dead=send(C.fresh(),{type:'brief'});while(dead.phase!=='ending')dead=send(dead,{type:'answer',answer:0});check(dead.energy===0&&dead.ending==='blackout','derrota por energia');check(!C.apply(dead,{type:'cell'}).ok,'derrota imutável');
check(C.ending({...s,score:1000,clues:['a','b','c','d','e'],trust:2,energy:15},'restore')==='dawn','limiar inclusivo');for(const delta of [{score:999},{clues:[]},{trust:0},{energy:14}])check(C.ending({...s,score:1000,clues:['a','b','c','d','e'],trust:2,energy:15,...delta},'restore')==='transition','final gradual '+JSON.stringify(delta));
const report={date:new Date().toISOString(),checks,tasks:Object.keys(D.tasks).length,paths,status:'PASS'};fs.writeFileSync(path.join(__dirname,'results','test-results-node.json'),JSON.stringify(report,null,2));console.log(`PASS: ${checks} verificações; ${report.tasks} desafios; ${paths.length} rotas/finais.`);

