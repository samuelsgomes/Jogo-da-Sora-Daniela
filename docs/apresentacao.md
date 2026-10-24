# Apresentação oral — 8 a 9 minutos

## 0:00–0:50 · Abertura
“Nosso projeto é Operação Zero: O Código do Caos. Nexus é uma cidade fictícia onde alertas contraditórios provocam decisões ruins e falhas nos serviços. O jogador investiga os dados e decide como recuperar o sistema. A pergunta central é: o que muda quando uma informação soma novos contatos e quando ela multiplica seu alcance?”
Mostre a tela inicial. Explique que o jogo funciona localmente, sem cadastro ou internet.

## 0:50–1:40 · Personagens e investigação
“O investigador conta com Lia, engenheira prática; Ivo, analista cauteloso; e Mara, repórter que exige transparência. O sistema ZERO parece um suspeito distante. Ao final descobrimos um erro de regra: ele confundiu repetição com confiança e priorizou comandos de consumo que produziram picos.”
Explique os três capítulos: Sinal Perdido, A Rede de Mentiras e Código Final. A revelação é sustentada por logs, não só por curvas que crescem juntas.

## 1:40–3:20 · Matemática no quadro ou no jogo
Escreva lado a lado:
- Linear: N(t)=100+50t. Em 3 minutos: 100+150=250 pessoas. Diferença constante de 50 por minuto.
- Exponencial: N(t)=100×2^t. Em 3 minutos: 100×8=800 pessoas. Razão constante de 2.
- Tempo inverso: 1.600=100×2^t → 16=2^t → t=log₂16=4 minutos.

“O logaritmo responde qual expoente é necessário. Não é apenas uma fórmula nova: ele responde quando o alcance chega a determinado alvo.”
Confira substituindo t=4. Mostre que 6.400 pessoas distintas não cabem na população monitorada de 5.000. O crescimento constante é uma simplificação inicial, sujeita a saturação e repetição de contatos.

## 3:20–5:20 · Demonstração sugerida
1. Abra o primeiro registro e responda 100. Abra o diário para mostrar a pista 01.
2. Na tabela, compare diferenças do canal A e razões do B. Marque B e valide.
3. No sensor, use as setas para marcar 800 e valide. Mostre a pista 02.
4. Explique que pistas antigas retornam na previsão do capítulo 2 e no cofre do capítulo 3.
5. Se houver uma operação de ensaio salva em outro navegador, mostre a decisão Praça/Torre ou um final. Não avance artificialmente o estado durante a apresentação. Se o tempo for curto, mostre o fluxograma e as capturas.

Para demonstrar um erro, escolha uma alternativa incorreta uma vez e leia o feedback. A resposta errada custa energia, mas oferece chance de revisão. Mostre uma dica com custo definido. Não gaste tempo percorrendo os 15 desafios ao vivo.

## 5:20–6:30 · Escolhas e finais
“A praça dá acesso aos moradores e à comparação de campanhas; a torre permite analisar o canal técnico e ordenar um algoritmo. Depois escolhemos auditoria pública ou isolamento. Essas escolhas mudam desafios, energia e confiança.”
Explique os quatro desfechos: retomada auditada, transição gradual, redes locais e supervisão central. O final pleno exige evidências completas, desempenho, energia e confiança. A derrota por bateria também explica o que aconteceu e oferece reinício.

## 6:30–7:30 · Construção e testes
“O jogo usa HTML, CSS e JavaScript sem bibliotecas obrigatórias. O desenho da cidade e os gráficos são SVG. A lógica fica separada dos dados e da interface. Salvamos ações confirmadas e reconstruímos o estado ao retomar.”
Abra `TESTES.md` e mostre os resultados realmente executados. Diferencie testes matemáticos de testes de interface. Cite movimento reduzido, teclado, tabelas alternativas e avisos de armazenamento bloqueado.

## 7:30–8:30 · Aprendizagem e fechamento
“Uma curva pode prever alcance, mas não provar a verdade de uma mensagem. A matemática ajuda a administrar recursos, ler evidências, reconhecer limitações e justificar decisões. O projeto usa uma ficção para tornar essas competências parte da investigação.”
Mencione OpenStax/Rice University para funções e OMS para o contexto de informação em emergências. Abra espaço para perguntas.

## Perguntas possíveis da professora

**Por que o primeiro modelo é linear?** Porque, em intervalos iguais, acrescenta 50 pessoas: N(t+1)−N(t)=50. As razões variam.

**Por que 100×2^t é exponencial?** Porque N(t+1)/N(t)=2. O tempo aparece no expoente e o aumento absoluto cresce.

**Como conferir o logaritmo sem calculadora?** Procuramos a potência: 2⁴=16. Portanto log₂16=4 e 100×16=1.600.

**Por que o tempo até 1.000 pode ser 3,322 ou 4?** São perguntas diferentes: no modelo contínuo, log₂10≈3,322; em leituras de minutos inteiros, a primeira observação suficiente é t=4. Aos 3 minutos temos só 800.

**Por que o modelo não vale para sempre?** A população é finita e contatos podem se repetir. O cálculo pode continuar crescendo, mas deixa de representar pessoas únicas no mundo descrito.

**Uma campanha linear nunca vence um boato exponencial?** Isso depende dos coeficientes e do intervalo. No cenário C=100+200t e B=100×2^t, a campanha está à frente em t=1 e t=2, mas atrás em t=3. Não generalizamos essa comparação para qualquer rede real.

**Popularidade prova veracidade?** Não. O alcance mede disseminação. Verificação exige fonte, evidências e contexto.

**Como a narrativa evita confundir correlação e causa?** No capítulo 1 rejeitamos essa inferência; no capítulo 3 um log assinado liga os comandos do núcleo ao mecanismo dos picos. Não culpamos Mara só porque publicou mensagens.

**Todas as alternativas foram verificadas?** A suíte de lógica verifica opções, subconjuntos de dados, todas as 24 ordens do algoritmo e 27 associações possíveis de modelos. A suíte do navegador percorre cada desafio com erro, dica e acerto. Consulte os relatórios para os números atuais.

**As escolhas são só cosméticas?** Não. Praça e torre têm dois desafios diferentes; auditoria e isolamento têm problemas de tempo distintos. Há custos de energia, confiança e finais diferentes.

**Os dados são de uma rede social real?** Não. São dados fictícios para comparação didática. A pesquisa não sustenta um fator universal de propagação de boatos.

**O jogo é acessível em todos os aparelhos?** Ele oferece teclado, contraste, movimento reduzido e layout responsivo. O ambiente testado foi Edge em computador, incluindo emulação de larguras pequenas; celulares físicos e leitores de tela não foram certificados.

## Divisão sugerida de tarefas
Distribua por responsabilidades, conforme o tamanho real do grupo. Uma pessoa pode acumular funções e uma responsabilidade pode ser compartilhada:
- Matemática: conferir contas, unidades, hipóteses e fontes.
- Narrativa: revisar falas, mistério, pistas e consequências.
- Interface: revisar identidade visual e apresentação em telas diferentes.
- Programação: manter estado, validação, diário e salvamento.
- Qualidade: executar testes e registrar problemas reproduzíveis.
- Apresentação: ensaiar o tempo, coordenar demonstração e organizar arquivos.

Cada integrante deve conseguir explicar ao menos um cálculo e uma escolha. Ensaiem antes e deixem uma cópia offline da pasta completa.
