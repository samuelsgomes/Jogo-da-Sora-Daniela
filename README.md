# OPERAÇÃO ZERO: O CÓDIGO DO CAOS

Jogo escolar de investigação e ficção científica, para Matemática do 2º ano do Ensino Médio. Três capítulos, 15 desafios por partida e 18 desafios escritos ao considerar as rotas alternativas. Dados e personagens fictícios. Duração estimada: 25–40 minutos, sem cronômetro.

## Executar
1. Abra `index.html` no Edge, Chrome, Firefox ou Safari atual, com JavaScript habilitado.
2. Clique em **Ir para a estação**; consulte **Como jogar** para regras e teclado.
3. Mantenha o `index.html` e as subpastas desta estrutura juntos. Não precisa de internet, servidor, cadastro ou instalação.

No celular, copie a pasta completa para um local que o navegador consiga abrir como arquivos HTML. Alguns gerenciadores de arquivos mostram apenas uma prévia, sem executar scripts; nesse caso, use um navegador com suporte a arquivos locais ou apresente no computador. A interface adapta-se a telas pequenas.

O progresso é salvo após ações confirmadas no armazenamento do navegador. Use o mesmo navegador e caminho. O comportamento de `localStorage` em `file://` pode variar; o jogo avisa se a escrita for bloqueada e continua em memória. Rascunhos não enviados não são salvos. Reiniciar exige confirmação e substitui o salvamento. Sem telemetria ou transmissão de dados.

## Publicação e celular
O jogo está preparado para GitHub Pages na conta `gabriel7SENAI`. A publicação depende da autorização da conta; ainda não há endereço ao vivo confirmado. Veja [como publicar e o estado da conexão](docs/PUBLICACAO.md).

O workflow `.github/workflows/pages.yml` testa as regras e publica apenas o jogo. `node scripts/preparar-publicacao.js` gera `dist/`, com caminhos relativos compatíveis com `/operacao-zero/`. A versão offline permanece na raiz.

A interface possui layout responsivo, controles de toque de pelo menos 44 px e adaptação do cabeçalho. Os testes cobrem larguras entre 320 e 1.440 px. A emulação não substitui testes em celulares físicos.

## Regras
- Energia inicial: 80/100; resposta errada: −7; correta: +3, até 100.
- Dica: −4 energia e −15 pontos do terminal, uma vez por desafio.
- Até 100 pontos por terminal; −20 por erro; mínimo 20 após resolver. Máximo de 1.500 na partida sem custos.
- Duas células: até +20 energia cada, com custo de 30 pontos, sem pontuação negativa.
- Diário gratuito com cinco pistas e soluções concluídas.
- Praça: −8 energia, +2 confiança. Torre: −12 energia, sem bônus de confiança.
- Auditoria: −10 energia, +2 confiança. Isolamento: −4 energia, sem bônus.
- Zero energia interrompe a operação e apresenta relatório, menu e reinício.

## Finais
Restaurar com ≥1.000 pontos, cinco pistas, confiança ≥2 e energia ≥15 produz **Nexus amanhece**. Restaurar abaixo de qualquer limite produz **Uma cidade em revisão**. Descentralizar produz **As ilhas de luz**. Supervisão central produz **O guardião vigiado**. Existe ainda a interrupção **A última reserva** por falta de energia. As opções narrativas não têm uma resposta moral única; os desafios anteriores validam as evidências que as sustentam.

## Controles e acessibilidade
Tab/Shift+Tab: navegar. Enter: ativar. Espaço: marcar opções. Setas: rádio, seleção e sensor. Ordenação: botões Subir/Descer, acessíveis por teclado. Esc: fechar janela. Gráficos têm eixos, legendas e versão tabular. Áudio começa desligado. A preferência de movimento reduzido vem do sistema. Não há tempo limite.

## Estrutura

```text
Operação Zero/
├── index.html             # Abra este arquivo para jogar
├── README.md
├── .github/workflows/     # Publicação automática no Pages
├── assets/
│   ├── css/               # Estilos
│   ├── js/                # Dados, regras e interface
│   └── img/               # Ícone SVG
├── docs/                  # Pesquisa, roteiro e apresentação
├── tests/
│   ├── tests.js
│   ├── tests-browser.js
│   ├── results/           # Relatórios de execução
│   └── screenshots/       # Capturas de computador e celular
├── scripts/               # Gerador do roteiro
└── entrega/               # ZIP pronto para compartilhar
```

## Arquivos
| Arquivo | Função |
|---|---|
| `index.html` | Entrada do jogo e cidade em SVG |
| `assets/css/styles.css` | Identidade visual, responsividade e movimento reduzido |
| `assets/js/data.js` | Desafios, personagens, pistas e capítulos |
| `assets/js/core.js` | Validação, estado, pontuação, recursos, finais e reconstrução do salvamento |
| `assets/js/app.js` | Interface, diálogos, gráficos, armazenamento e áudio |
| `assets/img/icon.svg` | Ícone próprio |
| `docs/validacao_matematica.md` | Três exemplos conferidos antes da implementação |
| `docs/pesquisa_matematica.md` | Fontes verificadas e conceitos |
| `docs/fluxograma.md` | Todas as rotas e finais em Mermaid |
| `docs/roteiro_storytelling.md` | História, falas, desafios, respostas e consequências |
| `docs/apresentacao.md` | Roteiro oral, demonstração e perguntas |
| `scripts/preparar-publicacao.js` | Prepara o jogo estático para o Pages |
| `tests/servidor-pages.js` | Testa os caminhos sob /operacao-zero/ |
| `scripts/gerar-roteiro.js` | Regenera o roteiro a partir dos dados reais do jogo |
| `tests/tests.js` | Testes de lógica com módulos nativos do Node |
| `tests/tests-browser.js` | Automação opcional no Edge via CDP, sem bibliotecas |
| `tests/results/test-results-node.json` | Resultado realmente gerado pela execução de lógica |
| `tests/results/test-results-browser.json` | Resultado gerado apenas se a execução do navegador concluir |
| `docs/TESTES.md` | Evidências, comandos, limitações e testes reproduzíveis |
| `tests/screenshots/preview-desktop.png`, `tests/screenshots/preview-mobile.png` | Capturas produzidas pela automação |

O teste do navegador pode gerar perfis temporários `.edge-tests-*` e logs dentro de `tests/results/`. Esses diagnósticos não são necessários para jogar e não devem ser compartilhados. O pacote atualizado fica em `entrega/Operacao-Zero-entrega.zip`.

## Executar testes (opcional)
É necessário Node.js apenas para os testes, nunca para jogar. No terminal, entre nesta pasta e execute:

```text
node --check assets/js/data.js
node --check assets/js/core.js
node --check assets/js/app.js
node tests/tests.js
node tests/tests-browser.js
```

O teste do navegador requer Edge no caminho indicado no início do script e Node 22+ com WebSocket nativo. Ele abre um perfil temporário próprio, usa `?test=1` com salvamento separado, captura imagens e fecha o navegador ao terminar. As flags de compatibilidade do processo de testes não são necessárias para jogar. Veja os resultados e limites em `docs/TESTES.md`.





## Direção visual
O jogo usa a ideia de um caderno de campo: registros em papel claro, mapa anotado e retratos próprios em SVG. Lia, Mara e Ivo têm falas e reações ligadas aos acontecimentos da cidade. As cores, fontes e ilustrações são locais; a versão publicada não depende de serviços de imagem ou fontes externas. O salvamento e as regras matemáticas usam os mesmos identificadores da versão anterior.
