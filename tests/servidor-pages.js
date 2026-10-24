'use strict';
// Servidor de teste: reproduz o prefixo de um projeto do GitHub Pages.
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'../dist'),prefix='/operacao-zero/';
const allowed=new Set(['index.html','assets/css/styles.css','assets/js/data.js','assets/js/core.js','assets/js/app.js','assets/img/icon.svg']);
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml'};
const server=http.createServer((req,res)=>{let name;try{const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);if(!pathname.startsWith(prefix))throw Error();name=pathname.slice(prefix.length)||'index.html';if(!allowed.has(name))throw Error();}catch{res.writeHead(404);res.end('Nao encontrado');return;}fs.readFile(path.join(root,name),(error,bytes)=>{if(error){res.writeHead(404);res.end();return;}res.writeHead(200,{'Content-Type':types[path.extname(name)],'Cache-Control':'no-store'});res.end(bytes);});});
server.listen(0,'127.0.0.1',()=>console.log(`Pages local: http://127.0.0.1:${server.address().port}${prefix}`));
