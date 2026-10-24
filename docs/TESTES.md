# Verificações e evidências

## Ambiente
Windows, Node.js v25.8.2 e Microsoft Edge 156.0.4314.42 em modo headless. O jogo foi testado inicialmente por `file://` e novamente por HTTP local sob `/operacao-zero/`, reproduzindo o prefixo do GitHub Pages, sem bibliotecas externas. Os testes usam uma chave de armazenamento separada, `operacao-zero-test-v1`, e não alteram o salvamento normal.

## Testes de lógica efetivamente executados
Comandos: `node --check assets/js/data.js`, `node --check assets/js/core.js`, `node --check assets/js/app.js` e `node tests/tests.js`.

Resultado registrado em `tests/results/test-results-node.json`: **1.176 verificações aprovadas**, 18 desafios escritos e 12 combinações de rota/acesso/destino.

Cobertura:
- Resposta correta de todos os desafios, entradas nulas/numéricas inválidas e limites da tolerância do gráfico.
- Todas as alternativas das questões de escolha e existência de feedback de erro.
- Todos os subconjuntos de cada seleção múltipla, as 24 permutações do algoritmo e as 27 combinações de associação dos modelos.
- Cálculos independentes para valor inicial, potências, porcentagem, logaritmo e tempo por taxa.
- Todas as combinações Praça/Torre × Auditoria/Isolamento × Restaurar/Descentralizar/Supervisionar.
- Exatamente 15 soluções e cinco pistas em toda rota concluída, pontuação perfeita, limites inclusivos dos finais e cada requisito insuficiente da transição.
- Dica única, penalidades, células, bloqueio de pontuação repetida, derrota e recusa de ações após final.
- Reconstrução do salvamento após cada ação das rotas; JSON, versão e sequências inválidas rejeitados.

## Testes efetivamente executados no navegador
Comando: `node tests/tests-browser.js`. Última execução completa: **1.575 verificações aprovadas**, sem exceções JavaScript. Consulte `tests/results/test-results-browser.json` para o total da última execução concluída, as 12 rotas e os 18 desafios com erro e dica.

A automação preenche os controles da página e pressiona os botões da interface. O estado exposto em `?test=1` é usado somente para leitura e conferência; as ações não são aplicadas diretamente ao núcleo pelo teste do navegador.

Cobertura:
- Início, instruções, áudio ligado/desligado, diário vazio, pausa, Esc e retorno do foco.
- Cada um dos 18 desafios com resposta errada recusada, feedback visível, redução de sete de energia, dica visível, custo de quatro e bloqueio de dica repetida; depois, resposta correta e explicação.
- Ordenação usando os botões e associação por seletores; gráficos e tabelas renderizados.
- As 12 rotas completas, cobrindo os quatro finais narrativos; derrota por esgotamento também exercitada.
- Recarregamento real e retomada do mesmo estado; ida ao menu e retomada sem perda de pontuação ou pistas.
- Reinício cancelado preserva o estado; reinício confirmado restaura o começo.
- Consumo real de célula e atualização do inventário.
- Escrita de armazenamento propositalmente bloqueada, com aviso e continuação em memória.
- Ausência de exceções JavaScript reportadas pelo protocolo do navegador.
- Verificações de largura em 320, 360, 390, 430, 768, 1.024 e 1.440 px para menu, abertura, decisões, finais e cada formato de desafio. Capturas reais em `tests/screenshots/preview-desktop.png` e `tests/screenshots/preview-mobile.png`.
- Preferência de movimento reduzido desativa animação da cidade. Teclado testado com Tab/Enter no início e Esc na pausa; a suíte também verifica entrada numérica, rádio e sensor por teclado antes de emitir seu relatório final.

## Problemas observados e correções
1. O PowerShell iniciou em `C:\` mesmo com `workdir` solicitado. Passamos a usar caminhos absolutos e `Set-Location -LiteralPath` explicitamente.
2. A primeira leitura da referência auxiliar da skill Sites usou `skills/references/preview/local.md` e falhou: **“Não é possível localizar o caminho ... porque ele não existe”**, `PathNotFound,Microsoft.PowerShell.Commands.GetContentCommand`. A leitura correta foi `skills/sites/references/preview/local.md` e funcionou.
3. A remoção de `.verificacao-escrita.tmp` por `Remove-Item -LiteralPath (Join-Path $p '.verificacao-escrita.tmp')` falhou com **“Remove-Item : Acesso negado”**, `System.UnauthorizedAccessException`. A leitura e a gravação dos arquivos do jogo funcionaram. O arquivo é dispensável.
4. Edge inicialmente encerrou com código **2147483651**; o log mostrou **“GPU process isn't usable. Goodbye.”**. O teste passou a usar GPU em processo e flags de compatibilidade de sandbox para o perfil isolado. Isso não muda os arquivos nem os requisitos de execução do jogo.
5. A automação inicialmente enviava Enter sem o texto de tecla correspondente e clicava sem focar os botões. Corrigimos os eventos e aguardamos a aplicação do foco após transições. O teste passou a simular a interação normal com mais fidelidade.
6. O título inicial e o cabeçalho foram ajustados para larguras pequenas. A suíte passou a medir todas as telas representativas a partir de 320 px.

Falhas de tentativas de teste não são contadas como aprovações. O relatório JSON de sucesso só é regravado quando a suíte inteira termina; se uma execução falhar, verifique a saída e eventual arquivo `test-results-browser-error.txt`.

## Roteiro manual reproduzível
1. Abra `index.html`, leia Como jogar, inicie e responda 100. Verifique pista 01 no diário.
2. No terminal 02, marque A e verifique: feedback explica diferença constante; marque B e valide.
3. No gráfico, ajuste 800 com as setas. Valide e confira pista 02.
4. Pause, feche com Esc, volte ao menu confirmando e retome. Recarregue e retome outra vez.
5. Escolha Praça e Auditoria em uma operação; Torre e Isolamento em outra. Compare os terminais 07, 08 e 11 e o inventário.
6. Termine uma operação sem erros e restaure com confiança suficiente; confirme Nexus amanhece. Torre + Isolamento + Restaurar produz transição mesmo com 1.500 pontos, por falta de cooperação pública.
7. Em novas operações, experimente Descentralizar e Supervisão central. Compare os textos finais e o relatório de decisões.
8. Erre o terminal inicial até a energia zerar para reproduzir A última reserva; reinicie com confirmação.
9. Ative movimento reduzido no sistema, navegue por teclado e redimensione para 320 px. Use a versão tabular de cada gráfico.

## Limites da verificação
Não foram testados celulares físicos, Safari, Firefox, leitores de tela reais ou todas as políticas possíveis de armazenamento de cada navegador. Emulação de largura verifica layout, não certifica dispositivos. A checagem de teclado cobre controles representativos e os elementos têm rótulos; não equivale a auditoria formal de acessibilidade. Não há teste de volume ou segurança contra edição deliberada dos arquivos locais, que não é objetivo de um jogo escolar offline.

## Limpeza da entrega
Os perfis temporários, o log do Edge, o relatório de tentativa malsucedida e o arquivo temporário de escrita foram removidos depois das verificações por operações de filesystem do Node, com destinos conferidos dentro desta pasta. Os dois JSON de sucesso e as capturas reais foram preservados. O ZIP de entrega contém apenas arquivos do projeto, sem perfis de navegador.


## Revisão para GitHub Pages
A última execução completa usou `ZERO_TEST_URL` apontando para o servidor local `tests/servidor-pages.js`, no prefixo `/operacao-zero/`. As 12 rotas passaram sem exceções. A suíte também mediu altura e largura mínimas de 44 px nos botões visíveis em telas pequenas. O script `scripts/preparar-publicacao.js` conferiu os seis arquivos estáticos e os caminhos de CSS, ícone e JavaScript. O workflow do GitHub foi criado, mas **não executado nos servidores do GitHub**: autorização e envio continuam pendentes.

## Revisão visual: caderno de campo
A interface foi redesenhada com folhas de investigação, mapa anotado e retratos em SVG próprios. As falas, aberturas e finais foram revisados; as regras, os cálculos, os identificadores de desafios e a chave de salvamento foram preservados. `docs/roteiro_storytelling.md` foi regenerado a partir do conteúdo efetivo.

Foram executadas novamente as 1.176 verificações de lógica e as 1.575 verificações no Edge, pelo caminho HTTP `/operacao-zero/`, incluindo 12 combinações de rotas/destinos, erro/dica/acerto nos 18 desafios e larguras de 320 a 1.440 px. As novas capturas de computador e celular foram abertas para inspeção visual.

Contrastes calculados pela fórmula de luminância relativa sRGB:
- Texto secundário no fundo escuro: 8,12:1.
- Texto principal no papel: 9,85:1.
- Texto do botão verde: 6,53:1.
- Texto secundário no papel: 5,25:1.

A tentativa de commit não foi concluída: `git add -- .github .gitignore README.md index.html assets docs scripts tests`, com `safe.directory` restrito a esta pasta, falhou com `fatal: Unable to create '.../.git/index.lock': Permission denied`. Nenhum arquivo foi adicionado ao índice e nenhum commit foi criado.
