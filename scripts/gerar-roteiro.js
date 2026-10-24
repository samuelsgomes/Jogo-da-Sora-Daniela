"use strict";
// Documento derivado do conteúdo efetivo para evitar divergência de falas e respostas.
const fs = require("node:fs"),
  path = require("node:path"),
  D = require("../assets/js/data.js"),
  C = require("../assets/js/core.js");
let out = `# Roteiro completo — Operação Zero: O Código do Caos

## Premissa e personagens
Nexus, 23h17. Alertas contraditórios afetam energia e comunicação. Um jovem investigador chega à estação Aurora para descobrir a origem e recuperar o sistema central.

Lia é prática e protege serviços essenciais. Ivo é preciso, mas admite incerteza. Mara escuta a população e exige prestação de contas. ZERO é um controlador que executou uma regra inadequada, sem um vilão humano demonstrado. O conflito é recuperar a infraestrutura sem repetir a confusão entre alcance e confiança.

## Progressão e falas de abertura
`;
D.chapters.forEach((c, i) => {
  out += `\n### Capítulo ${i + 1}: ${c.title}\nLocal: ${c.place}.\n\n${c.text}\n\n${c.reply}\n`;
});
out += `\n## Bifurcações e transições\n
Depois do terminal 05, escolher Praça custa 8 de energia e acrescenta 2 de confiança; abre os terminais c2bp e c2cp com Mara. O bloco de 48 registros é confirmado por cópia comunitária. Escolher Torre custa 12 e mantém a confiança; abre c2bt e c2ct com Lia. O mesmo bloco é encontrado na manutenção. A convergência posterior preserva a diferença de recursos e de cooperação, além das experiências distintas.

Depois do terminal 10, escolher Auditoria custa 10 e acrescenta 2 de confiança; abre c3ao, com cálculo logarítmico contínuo. Isolamento custa 4, sem bônus de confiança; abre c3ai, com limiar em leituras inteiras. O cofre exige o bloco de 48 e a taxa de 8 por minuto.

Cada capítulo tem cinco terminais. As aberturas só existem nesses três capítulos; decisões e finais não criam capítulos adicionais. Cada resposta correta oferece explicação e Continuar. Respostas erradas voltam ao mesmo problema, com feedback específico e custo. Se a bateria acabar, há relatório com motivo e reinício.

## Pistas conectadas\n`;
for (const [id, p] of Object.entries(D.clues))
  out += `\n- **${p.title}** (${id}): ${p.text}\n`;
out += `\nPistas 01 e 02 retornam em c2a e c3ao; a pista 03 sustenta c3d e c3e. Pistas 04 e 05 são exigidas pelo cofre c3b. Os enunciados de reutilização orientam abrir o diário e omitem os dados numéricos que ele preserva.

## Todos os desafios, falas e respostas\n`;
const sequence = [
  ["01", "c1a"],
  ["02", "c1b"],
  ["03", "c1c"],
  ["04", "c1d"],
  ["05", "c1e"],
  ["06", "c2a"],
  ["07 / Praça", "c2bp"],
  ["07 / Torre", "c2bt"],
  ["08 / Praça", "c2cp"],
  ["08 / Torre", "c2ct"],
  ["09", "c2d"],
  ["10", "c2e"],
  ["11 / Auditoria", "c3ao"],
  ["11 / Isolamento", "c3ai"],
  ["12", "c3b"],
  ["13", "c3c"],
  ["14", "c3d"],
  ["15", "c3e"],
];
for (const [position, id] of sequence) {
  const t = D.tasks[id];
  out += `\n### ${position} — ${t.title} (${id})\nFormato: ${t.type}. Habilidade: ${t.concept}.\n\n**${t.who}:** “${t.line}”\n\n**Investigação:** ${t.prompt}\n`;
  if (t.table)
    out += `\nDados: ${t.table.heads.join(" | ")}\n${t.table.rows.map((r) => r.join(" | ")).join("\n")}\n`;
  if (t.graph)
    out += `\nVisual: ${t.graph === "growth" ? "curva N=100×2^t, 0 a 3 min, eixo vertical 0 a 900 pessoas; ponto em (3,800)." : "curvas B=100×2^t e C=100+200t, 0 a 4 min, eixo vertical 0 a 1.800 pessoas; em t=3, B=800 e C=700."} Há tabela equivalente para leitura acessível.\n`;
  if (t.options && t.type !== "match")
    out +=
      "\n" +
      t.options
        .map(
          (o) =>
            `- ${o.id}: ${o.text}. Feedback: ${o.feedback || "Evidência correta; após validar, exibir solução."}`,
        )
        .join("\n") +
      "\n";
  if (t.type === "order")
    out += `\nOrdem correta: ${t.expected.map((x) => t.items.find((i) => i.id === x).text).join(" → ")}.\n`;
  if (t.type === "match")
    out += `\nAssociações: ${t.pairs.map((p) => p.text + " → " + t.options.find((o) => o.id === p.id).text).join("; ")}\n`;
  if (t.expected && t.type === "multi")
    out += `\nEvidências exigidas: ${t.expected.join(", ")}. Selecionar dados extras ou omitir um necessário é incorreto.\n`;
  if (t.answer !== undefined)
    out += `\nResposta: ${t.answer} ${t.unit}${t.tolerance ? " (tolerância ±" + t.tolerance + ")" : ""}.\n`;
  out += `\n**Solução e feedback educativo:** ${t.solution}\n\n**Dica opcional:** ${t.hint}\n`;
  if (t.wrong) out += `\n**Feedback de erro:** ${t.wrong}\n`;
  if (t.clue)
    out += `\n**Consequência:** registrar ${D.clues[t.clue].title} no diário.\n`;
}
out += `\n## Revelação e destino\n
A fala de ZERO no terminal 14 é a confissão operacional: a regra recebida foi “alcance é confiança”. Repetições ganharam prioridade, alertas de consumo induziram picos simultâneos e falhas de comunicação. O log acrescenta o mecanismo que faltava no capítulo 1. O jogador precisa selecionar as evidências corretas antes de decidir a política final. As opções de política não são um quiz: representam valores e custos diferentes já explicados na interface.

Restaurar leva ao amanhecer pleno se há pelo menos 1.000 pontos, cinco pistas, confiança ≥2 e energia ≥15. Se qualquer requisito falta, a cidade entra em transição. Descentralizar e supervisionar têm finais próprios. A pontuação e as escolhas aparecem no relatório de qualquer final.
`;
for (const e of Object.values(C.endings))
  out += `\n### ${e.title}\n${e.label}\n\n${e.text}\n`;
out += `\n## Saídas e retomada\nTodas as telas finais oferecem relatório/diário, menu e nova operação. O reinício exige confirmação. Pausar permite retomar, voltar ao menu com confirmação ou reiniciar com confirmação. O salvamento reconstrói ações verificadas e devolve o jogador ao mesmo ponto, inclusive feedback de acerto aguardando Continuar. Não há telas com tempo limite nem finais sem explicação.\n`;
fs.writeFileSync(
  path.resolve(__dirname, "../docs/roteiro_storytelling.md"),
  out,
);
