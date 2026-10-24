'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),target=path.join(root,'dist');
const files=['index.html','assets/css/styles.css','assets/js/data.js','assets/js/core.js','assets/js/app.js','assets/img/icon.svg'];
// A lista explícita impede publicar documentos escolares ou diagnósticos por acidente.
for(const relative of files){const source=path.join(root,relative),out=path.join(target,relative);assert.ok(fs.statSync(source).isFile(),relative);fs.mkdirSync(path.dirname(out),{recursive:true});fs.copyFileSync(source,out);}
const html=fs.readFileSync(path.join(target,'index.html'),'utf8');
for(const match of html.matchAll(/(?:src|href)="(assets\/[^\"]+)"/g))assert.ok(fs.existsSync(path.join(target,match[1])),match[1]);
for(const entry of fs.readdirSync(target))assert.ok(['index.html','assets'].includes(entry),'Arquivo inesperado no destino: '+entry);
console.log('Publicação preparada: 6 arquivos conferidos em dist/. Caminhos relativos compatíveis com /operacao-zero/.');
