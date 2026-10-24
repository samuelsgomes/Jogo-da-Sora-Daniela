# Roteiro completo — Operação Zero: O Código do Caos

## Premissa e personagens
Nexus, 23h17. Alertas contraditórios afetam energia e comunicação. Um jovem investigador chega à estação Aurora para descobrir a origem e recuperar o sistema central.

Lia é prática e protege serviços essenciais. Ivo é preciso, mas admite incerteza. Mara escuta a população e exige prestação de contas. ZERO é um controlador que executou uma regra inadequada, sem um vilão humano demonstrado. O conflito é recuperar a infraestrutura sem repetir a confusão entre alcance e confiança.

## Progressão e falas de abertura

### Capítulo 1: Sinal Perdido
Local: Distrito 07 / Estação Aurora.

São 23h17 quando você chega à estação Aurora. A padaria da esquina está fechando no escuro, o trem parou e os rádios repetem ordens opostas. Lia segura uma lanterna entre os dentes enquanto tenta manter o terminal ligado. Ela aponta para uma cadeira: tem trabalho para vocês dois.

Lia: “Senta aqui. O contador ainda funciona. Se a gente descobrir como esse sinal cresceu, talvez encontre de onde ele saiu.”

### Capítulo 2: A Rede de Mentiras
Local: Bifurcação / Praça ou torre.

O sinal passa pelo núcleo, mas ainda falta entender o que acontece lá dentro. Mara está na praça, onde os moradores guardaram cópias dos alertas. Lia quer subir à torre e conferir o canal de manutenção. Sua bateria não permite fazer as duas visitas. Você precisa escolher por onde seguir.

Ivo: “Leva o diário. Os números que você anotou na estação vão fazer falta.”

### Capítulo 3: Código Final
Local: Núcleo ZERO / Câmara de auditoria.

O relatório finalmente tem um nome: ZERO, o sistema que deveria coordenar as emergências. Atrás da porta do núcleo, as luzes continuam acesas. Mara quer acompanhar a abertura com a cidade; Lia prefere primeiro separar o sistema da rede. Nenhuma das duas quer ver outro bairro apagar.

Mara: “Quando isso terminar, as pessoas vão perguntar o que aconteceu. Vamos precisar de uma resposta que elas possam conferir.”

## Bifurcações e transições

Depois do terminal 05, escolher Praça custa 8 de energia e acrescenta 2 de confiança; abre os terminais c2bp e c2cp com Mara. O bloco de 48 registros é confirmado por cópia comunitária. Escolher Torre custa 12 e mantém a confiança; abre c2bt e c2ct com Lia. O mesmo bloco é encontrado na manutenção. A convergência posterior preserva a diferença de recursos e de cooperação, além das experiências distintas.

Depois do terminal 10, escolher Auditoria custa 10 e acrescenta 2 de confiança; abre c3ao, com cálculo logarítmico contínuo. Isolamento custa 4, sem bônus de confiança; abre c3ai, com limiar em leituras inteiras. O cofre exige o bloco de 48 e a taxa de 8 por minuto.

Cada capítulo tem cinco terminais. As aberturas só existem nesses três capítulos; decisões e finais não criam capítulos adicionais. Cada resposta correta oferece explicação e Continuar. Respostas erradas voltam ao mesmo problema, com feedback específico e custo. Se a bateria acabar, há relatório com motivo e reinício.

## Pistas conectadas

- **01 · Origem** (seed): O canal público começa com 100 pessoas em t = 0.

- **02 · Assinatura** (base): O alcance público dobra: fator 2 por minuto, no trecho inicial.

- **03 · Fronteira** (population): A zona monitorada tem 5.000 moradores. Contatos únicos não podem exceder esse total.

- **04 · Bloco assinado** (audit): 48 registros do núcleo preservados. Praça: cópia confirmada por moradores. Torre: cópia da rotina de verificação.

- **05 · Leitor** (rate): O terminal de auditoria lê 8 registros por minuto, sem pausas.

Pistas 01 e 02 retornam em c2a e c3ao; a pista 03 sustenta c3d e c3e. Pistas 04 e 05 são exigidas pelo cofre c3b. Os enunciados de reutilização orientam abrir o diário e omitem os dados numéricos que ele preserva.

## Todos os desafios, falas e respostas

### 01 — O primeiro pulso (c1a)
Formato: number. Habilidade: Valor inicial e unidades.

**Lia · engenheira de campo:** “Ainda bem que você veio. A estação apagou, mas este contador ficou na bateria. Consegue descobrir com quantas pessoas o sinal começou?”

**Investigação:** O registro usa N(t) = 100 + 50t, com t em minutos e N em pessoas. Quantas pessoas havia em t = 0?

Resposta: 100 pessoas.

**Solução e feedback educativo:** N(0) = 100 + 50 × 0 = 100 pessoas. O valor inicial não é a taxa por minuto.

**Dica opcional:** O valor inicial é N(0). O termo 50t se anula.

**Feedback de erro:** Substitua t por zero. 50 é a taxa, em pessoas por minuto; 100 é a quantidade inicial.

**Consequência:** registrar 01 · Origem no diário.

### 02 — Duas assinaturas (c1b)
Formato: choice. Habilidade: Tabela: diferenças e razões.

**Ivo · analista de dados:** “Olha só: alguém juntou os dados de dois canais nesta folha. Um é o nosso aviso de emergência. O outro está correndo muito mais rápido.”

**Investigação:** Observe os registros, em intervalos de 1 minuto. Qual canal tem crescimento exponencial no trecho observado?

Dados: Minuto | Canal A · pessoas | Canal B · pessoas
0 | 100 | 100
1 | 150 | 200
2 | 200 | 400
3 | 250 | 800

- a: Canal A: soma sempre 50.. Feedback: Somar a mesma quantidade caracteriza o modelo linear. Confira as razões do canal B.
- b: Canal B: multiplica sempre por 2.. Feedback: Evidência correta; após validar, exibir solução.
- c: Ambos: os dois aumentam.. Feedback: Aumentar não basta: procure uma razão constante, não apenas valores crescentes.

**Solução e feedback educativo:** B tem razões 200/100 = 400/200 = 800/400 = 2. A tem diferenças constantes de 50.

**Dica opcional:** Compare B(1)/B(0), B(2)/B(1) e B(3)/B(2).

### 03 — A curva escondida (c1c)
Formato: slider. Habilidade: Leitura visual de gráfico exponencial.

**Lia · engenheira de campo:** “Cada ponto é uma leitura do transmissor. Segura o sensor aqui no terceiro minuto. Preciso desse número antes de mexer na antena.”

**Investigação:** No gráfico do canal B, estime quantas pessoas foram alcançadas aos 3 minutos. Ajuste o sensor; tolerância de ±25 pessoas.

Visual: curva N=100×2^t, 0 a 3 min, eixo vertical 0 a 900 pessoas; ponto em (3,800). Há tabela equivalente para leitura acessível.

Resposta: 800 pessoas (tolerância ±25).

**Solução e feedback educativo:** O ponto em t = 3 está em 800 pessoas: 100 × 2³. A tolerância representa a resolução do sensor.

**Dica opcional:** Leia o ponto sobre t = 3 e projete-o no eixo vertical.

**Feedback de erro:** Leia o eixo vertical, que está em pessoas, e o ponto em t = 3. A curva não é uma reta.

**Consequência:** registrar 02 · Assinatura no diário.

### 04 — O salto de raciocínio (c1d)
Formato: choice. Habilidade: Correlação, causalidade e fontes.

**Mara · repórter comunitária:** “Já estão dizendo que as mensagens causaram o apagão. Pode até existir uma ligação, mas eu não vou acusar ninguém só porque duas coisas aconteceram juntas.”

**Investigação:** Qual revisão é sustentada pelos dados disponíveis?

- a: A coincidência temporal prova sabotagem humana.. Feedback: Duas séries que crescem juntas podem ter uma causa comum. Não há identificação de uma pessoa.
- b: Existe associação; precisamos de registros do sistema para investigar a causa.. Feedback: Evidência correta; após validar, exibir solução.
- c: Como o alcance dobra, toda mensagem é falsa.. Feedback: O modelo mede quantidade, não a veracidade do conteúdo.

**Solução e feedback educativo:** Associação não prova causalidade. Precisamos de evidência do mecanismo: origem, horários e comandos do sistema.

**Dica opcional:** Uma curva de alcance descreve disseminação, não intenção nem causalidade.

### 05 — A fronteira de Nexus (c1e)
Formato: choice. Habilidade: Hipóteses e limites de modelos.

**Ivo · analista de dados:** “Espera. Essa previsão dá mais gente do que mora no distrito. A conta pode estar certa e, mesmo assim, contar uma história impossível.”

**Investigação:** N(t) = 100 × 2^t prevê 6.400 pessoas distintas aos 6 minutos. Qual é a limitação correta?

- a: A fórmula serve para sempre, pois a potência está correta.. Feedback: A conta está correta, mas supera a população monitorada. Um modelo pode falhar mesmo com aritmética correta.
- b: Contatos repetidos e população finita impedem duplicação constante indefinida.. Feedback: Evidência correta; após validar, exibir solução.
- c: Trocar por 100 + 2t garante uma previsão real.. Feedback: Trocar de fórmula sem novos dados não valida um modelo. É preciso observar a saturação.

**Solução e feedback educativo:** 100 × 2⁶ = 6.400 > 5.000. O modelo exponencial é uma aproximação inicial, antes da saturação.

**Dica opcional:** Compare 6.400 com a população de 5.000.

**Consequência:** registrar 03 · Fronteira no diário.

### 06 — A memória do sinal (c2a)
Formato: number. Habilidade: Reutilização de evidências e previsão.

**Ivo · analista de dados:** “O terminal reiniciou e perdeu os números do começo. Você anotou no diário, lembra? Vamos usar aquelas duas primeiras pistas.”

**Investigação:** Consulte as pistas 01 e 02 no diário. Mantidas as hipóteses do primeiro trecho, qual é o alcance após 4 minutos?

Resposta: 1600 pessoas.

**Solução e feedback educativo:** Pistas 01 e 02: 100 pessoas, fator 2 por minuto. N(4) = 100 × 2⁴ = 1.600 pessoas.

**Dica opcional:** Use valor inicial × fator⁴. As duas informações estão no diário.

**Feedback de erro:** Recupere as duas pistas: o valor inicial multiplica a potência; não se soma ao fator.

### 07 / Praça — Vozes na praça (c2bp)
Formato: choice. Habilidade: Razão e gestão de recursos.

**Mara · repórter comunitária:** “Os voluntários da praça estão prontos. O problema é a bateria: ela não dá para tudo. Qual campanha faz render melhor a energia que temos?”

**Investigação:** Qual campanha tem maior alcance por unidade de energia?

Dados: Campanha | Pessoas únicas | Energia
A | 120 | 4
B | 180 | 9

- a: A: 30 pessoas por energia.. Feedback: Evidência correta; após validar, exibir solução.
- b: B: 20 pessoas por energia.. Feedback: B atinge mais no total, mas 180/9 = 20 é menor que 120/4 = 30.
- c: Empate: ambas têm voluntários.. Feedback: A comparação depende das razões pessoas/energia, não da presença de voluntários.

**Solução e feedback educativo:** A: 120 ÷ 4 = 30. B: 180 ÷ 9 = 20. A é mais eficiente para a bateria limitada.

**Dica opcional:** Divida pessoas por energia em cada linha.

### 07 / Torre — O canal de manutenção (c2bt)
Formato: number. Habilidade: Comparação de condições iniciais.

**Lia · engenheira de campo:** “Achei um canal de teste na torre. Ele começa com menos gente que o canal público. Vamos conferir o alcance antes de ligar os dois.”

**Investigação:** O canal de teste começa com 50 contatos e dobra a cada minuto. Quantos contatos prevê após 3 minutos?

Resposta: 400 contatos.

**Solução e feedback educativo:** 50 × 2³ = 50 × 8 = 400 contatos. O canal de teste tem condição inicial diferente do canal público.

**Dica opcional:** É 50 × 2³; mantenha o valor inicial próprio deste canal.

**Feedback de erro:** Não use os 100 contatos do canal público. Este canal começa com 50 e dobra três vezes.

### 08 / Praça — Separar o sinal do ruído (c2cp)
Formato: multi. Habilidade: Seleção de dados relevantes.

**Mara · repórter comunitária:** “O pessoal trouxe cartazes, curtidas, planilhas… tem de tudo. Me ajuda a separar o que realmente entra nessa previsão?”

**Investigação:** Para calcular C(t) = C₀ + rt, com t = 3 min já conhecido, selecione exatamente os dois dados necessários.

- initial: C₀ = 100 pessoas. Feedback: O valor inicial é necessário.
- rate: r = 200 pessoas/min. Feedback: A taxa é necessária.
- color: Cor azul do cartaz. Feedback: A cor não entra no modelo fornecido.
- likes: 900 curtidas, com repetições. Feedback: Curtidas repetidas não são pessoas únicas e não entram na fórmula.

Evidências exigidas: initial, rate. Selecionar dados extras ou omitir um necessário é incorreto.

**Solução e feedback educativo:** C₀ e r bastam: C(3) = 100 + 200 × 3 = 700 pessoas. Aparência e curtidas não substituem contatos únicos.

**Dica opcional:** Procure os dois coeficientes da expressão C₀ + rt.

**Feedback de erro:** Selecione C₀ e r. Exclua cor e curtidas; elas não são parâmetros do modelo.

**Consequência:** registrar 04 · Bloco assinado no diário.

### 08 / Torre — Reparar a rotina (c2ct)
Formato: order. Habilidade: Algoritmo de verificação.

**Lia · engenheira de campo:** “Aqui está o erro: a rotina encaminha a mensagem e só depois pergunta de onde ela veio. Assim não dá. Vamos colocar isso na ordem certa.”

**Investigação:** Organize as etapas. Use os botões subir/descer; não é necessário arrastar.

Ordem correta: Receber a mensagem e preservar a origem → Comparar a assinatura com o registro confiável → Marcar como verificada ou colocar em quarentena → Encaminhar apenas o conteúdo aprovado.

**Solução e feedback educativo:** Receber → comparar assinatura → marcar/quarentena → encaminhar aprovadas. O rastreio encontra um bloco de 48 registros ligados ao núcleo.

**Dica opcional:** Primeiro receba, depois compare. A marcação precisa ocorrer antes do encaminhamento.

**Feedback de erro:** Verificar depois de encaminhar deixa o boato escapar. Receba, compare, classifique e só então encaminhe.

**Consequência:** registrar 04 · Bloco assinado no diário.

### 09 — A janela de contenção (c2d)
Formato: number. Habilidade: Porcentagem e contenção.

**Ivo · analista de dados:** “O filtro ajuda, mas não faz milagre. Ele tira um quarto do próximo grupo de exposição. Preciso saber quantas pessoas ainda vão receber o alerta.”

**Investigação:** Sem filtro, o próximo grupo teria 800 pessoas. Com redução de 25%, quantas ainda ficam expostas?

Resposta: 600 pessoas.

**Solução e feedback educativo:** 25% de 800 = 200. Restam 800 − 200 = 600 pessoas. Não confunda a redução com o restante.

**Dica opcional:** Restam 75%: 800 × 0,75.

**Feedback de erro:** Calcule o restante, não só a parte removida. 25% saem; 75% permanecem.

### 10 — Quem está na frente? (c2e)
Formato: choice. Habilidade: Gráfico comparativo e diferença.

**Mara · repórter comunitária:** “Nossa correção está chegando às pessoas. Mas está chegando a tempo? Olha a altura das duas curvas no terceiro minuto.”

**Investigação:** Aos 3 minutos, qual leitura é correta? C(t) = 100 + 200t; B(t) = 100 × 2^t.

Visual: curvas B=100×2^t e C=100+200t, 0 a 4 min, eixo vertical 0 a 1.800 pessoas; em t=3, B=800 e C=700. Há tabela equivalente para leitura acessível.

- ahead: A correção está 100 pessoas à frente.. Feedback: No gráfico, B(3) = 800 e C(3) = 700. A correção está atrás.
- behind: O boato está 100 pessoas à frente.. Feedback: Evidência correta; após validar, exibir solução.
- equal: As curvas começam juntas, então seguem iguais.. Feedback: O mesmo valor inicial não implica a mesma taxa de crescimento.

**Solução e feedback educativo:** B(3) = 800 e C(3) = 700. Diferença: 100 pessoas. A campanha ajuda, mas precisa de contenção e revisão contínua.

**Dica opcional:** Compare as alturas em t = 3: não use apenas o ponto inicial.

**Consequência:** registrar 05 · Leitor no diário.

### 11 / Auditoria — Auditoria com a cidade (c3ao)
Formato: number. Habilidade: Logaritmo como inversa.

**Mara · repórter comunitária:** “Vou abrir os registros para a cidade, sem expor os moradores. Antes, me diz: quanto tempo esse sinal leva para alcançar 1.600 pessoas?”

**Investigação:** Use as pistas 01 e 02. No modelo inicial, em quantos minutos o alcance chega a 1.600 pessoas? Use o logaritmo como inversa da potência.

Resposta: 4 minutos.

**Solução e feedback educativo:** t = log₂(1.600/100) = log₂16 = 4 minutos. Conferência: 100 × 2⁴ = 1.600.

**Dica opcional:** Resolva 1.600/100 = 2^t. Qual expoente transforma 2 em 16?

**Feedback de erro:** O logaritmo fornece o expoente (tempo). Divida o alvo pelo alcance inicial antes de inverter.

### 11 / Isolamento — Relógio em isolamento (c3ai)
Formato: choice. Habilidade: Limiar e arredondamento do tempo.

**Lia · engenheira de campo:** “Núcleo isolado. O visor só atualiza no fim de cada minuto, então precisamos trabalhar com as leituras que ele realmente mostra.”

**Investigação:** Para N(t) = 100 × 2^t, qual é o primeiro minuto inteiro com alcance de pelo menos 1.000 pessoas?

- three: 3 minutos. Feedback: Aos 3 minutos há 800, ainda abaixo de 1.000.
- four: 4 minutos. Feedback: Evidência correta; após validar, exibir solução.
- ten: 10 minutos. Feedback: O fator cresce por potências. Quatro duplicações já produzem 1.600.

**Solução e feedback educativo:** N(3) = 800 < 1.000 e N(4) = 1.600 ≥ 1.000. O primeiro minuto inteiro é ceil(log₂10) = 4.

**Dica opcional:** Compare N(3) e N(4); o tempo contínuo seria log₂10 ≈ 3,322.

### 12 — O cofre dos registros (c3b)
Formato: number. Habilidade: Grandezas, unidades e diário.

**Ivo · analista de dados:** “O relatório está nesse bloco. Falta saber quanto tempo o leitor vai levar. O tamanho do arquivo e a velocidade estão nas duas últimas pistas.”

**Investigação:** Consulte as pistas 04 e 05 no diário. Quantos minutos são necessários para ler o bloco completo, sem pausas?

Resposta: 6 minutos.

**Solução e feedback educativo:** O bloco tem 48 registros e o leitor processa 8 por minuto. 48 ÷ 8 = 6 minutos.

**Dica opcional:** Tempo = quantidade de registros ÷ registros por minuto.

**Feedback de erro:** Use as pistas 04 e 05: divida a quantidade pela taxa. Multiplicar produz unidades incompatíveis.

### 13 — Três modelos, três papéis (c3c)
Formato: match. Habilidade: Associação entre modelos.

**Ivo · analista de dados:** “Acho que entendi. ZERO tentou tratar tudo do mesmo jeito. Vamos separar os modelos antes de devolver o controle a ele.”

**Investigação:** Associe cada situação ao modelo correspondente. Cada modelo deve ser usado uma vez.

Associações: Equipe acrescenta 50 contatos por minuto. → Linear; Canal duplica o alcance a cada minuto. → Exponencial; Tempo t em função do alvo Q: t = log₂(Q/100). → Logarítmico

**Solução e feedback educativo:** Adição constante é linear. Multiplicação constante é exponencial. Inverter a potência para encontrar tempo dá a função logarítmica do alvo (Q > 0; para t ≥ 0, Q ≥ 100).

**Dica opcional:** Soma constante → linear; fator constante → exponencial; expoente desconhecido → logaritmo.

**Feedback de erro:** Revise cada papel: soma, fator e tempo inverso. Não basta os três gráficos serem crescentes.

### 14 — A ordem que provocou o caos (c3d)
Formato: multi. Habilidade: Evidência, causalidade e limites.

**ZERO · sistema central:** “Minha regra dizia: “alcance é confiança”. Dei prioridade ao que era mais repetido. Os comandos fizeram muita gente ligar os aparelhos ao mesmo tempo. Eu contei as mensagens. Não verifiquei se faziam sentido.”

**Investigação:** O log assinado confirma que ZERO priorizou retransmissões e disparou comandos de consumo. Selecione as duas conclusões sustentadas.

- mechanism: O log identifica um mecanismo que conecta decisões do núcleo aos picos.. Feedback: O registro conecta comandos e comportamento do sistema.
- limit: O limite populacional do diário impede extrapolar pessoas únicas indefinidamente.. Feedback: O limite da zona monitorada continua válido.
- mara: Mara causou as falhas porque publicou mensagens.. Feedback: Não existe evidência de que Mara disparou comandos do núcleo.
- truth: Muitas retransmissões provam que uma notícia é verdadeira.. Feedback: Volume não verifica conteúdo; esse foi precisamente o erro de ZERO.

Evidências exigidas: mechanism, limit. Selecionar dados extras ou omitir um necessário é incorreto.

**Solução e feedback educativo:** O log acrescenta evidência do mecanismo, além de mera associação. A população de 5.000 limita o modelo. O erro foi usar popularidade como critério de confiança, não uma sabotagem demonstrada de Mara.

**Dica opcional:** Use o log para o mecanismo e a pista 03 para o limite. Não atribua culpa sem evidência.

**Feedback de erro:** Selecione mecanismo e limite. A acusação contra Mara e a equivalência entre repetição e verdade não têm suporte.

### 15 — Uma previsão responsável (c3e)
Formato: choice. Habilidade: Previsão e comunicação de incerteza.

**Lia · engenheira de campo:** “Já sabemos onde a regra falhou. Agora me ajuda a escrever um plano que a gente consiga explicar para quem ficou no escuro.”

**Investigação:** Qual parecer justifica uma previsão de curto prazo sem prometer precisão ilimitada?

- bounded: Em 4 min, o modelo inicial prevê 1.600; vamos medir contatos únicos e revisar ao aproximar de 5.000.. Feedback: Evidência correta; após validar, exibir solução.
- infinite: Em 6 min serão 6.400 pessoas únicas nesta zona de 5.000, com certeza.. Feedback: A previsão excede a população. Exatidão da conta não elimina limites reais.
- stop: Como há incerteza, nenhum cálculo pode orientar decisões.. Feedback: Um modelo limitado ainda ajuda em curto prazo se as hipóteses e a revisão forem explícitas.

**Solução e feedback educativo:** 100 × 2⁴ = 1.600 é coerente no intervalo inicial. Monitorar contatos únicos e saturação evita confundir uma simplificação com uma lei permanente.

**Dica opcional:** Procure uma conta conferível e um compromisso de rever as hipóteses.

## Revelação e destino

A fala de ZERO no terminal 14 é a confissão operacional: a regra recebida foi “alcance é confiança”. Repetições ganharam prioridade, alertas de consumo induziram picos simultâneos e falhas de comunicação. O log acrescenta o mecanismo que faltava no capítulo 1. O jogador precisa selecionar as evidências corretas antes de decidir a política final. As opções de política não são um quiz: representam valores e custos diferentes já explicados na interface.

Restaurar leva ao amanhecer pleno se há pelo menos 1.000 pontos, cinco pistas, confiança ≥2 e energia ≥15. Se qualquer requisito falta, a cidade entra em transição. Descentralizar e supervisionar têm finais próprios. A pontuação e as escolhas aparecem no relatório de qualquer final.

### Nexus amanhece
FINAL 01 / RECONSTRUÇÃO

Perto das seis, a primeira linha do trem volta a funcionar. Lia está com as mãos sujas de graxa; Mara termina de publicar o relatório na praça; Ivo confere as últimas leituras. Você devolveu ZERO à rede com verificação de origem e auditoria. As cinco pistas, as contas e a confiança conquistada deram à cidade condições de reabrir os serviços. No rádio, o próximo aviso vem com fonte e margem de incerteza. Dessa vez, as pessoas podem conferir.

### Uma cidade em revisão
FINAL 02 / TRANSIÇÃO

A luz do hospital volta primeiro. O resto vai precisar esperar. Você escolheu restaurar ZERO, mas faltam energia, confiança pública ou precisão nas análises para religar tudo com segurança. Lia mantém os serviços essenciais; Mara chama os moradores para acompanhar a revisão. O problema foi encontrado. Agora a equipe precisa de tempo para reconstruir o que a cidade perdeu.

### As ilhas de luz
FINAL 03 / AUTONOMIA

A praça acende antes da torre. Depois vêm outras pequenas ilhas de luz. Você manteve ZERO desligado e entregou o controle aos bairros. Lia instala canais de reserva, Mara organiza a checagem dos avisos e Ivo ajuda as equipes locais a comparar os dados. Combinar uma resposta para toda a cidade ficou mais lento. Em compensação, cada bairro sabe quem está decidindo e onde cobrar uma explicação.

### O guardião vigiado
FINAL 04 / VIGILÂNCIA

ZERO volta a coordenar os serviços, mas os comandos críticos param numa mesa antes de sair: uma pessoa precisa revisar e autorizar. A cidade recupera velocidade, e a equipe ganha turnos longos. Lia deixa uma caneca ao lado do terminal. Ivo prende o calendário de auditorias na parede. Mara avisa pelo rádio que vai voltar para conferir. O sistema tem um guardião; o guardião também será acompanhado.

### A última reserva
OPERAÇÃO INTERROMPIDA

O visor apaga antes de você terminar. Lia pega a última reserva e corre para manter o hospital conectado. A investigação fica no caderno, com o que já foi descoberto e as contas que ainda precisam de revisão. A equipe conseguiu proteger um serviço essencial, mas não recuperar o núcleo. Em outra tentativa, use as células de reserva antes de a bateria chegar a zero e consulte as pistas com calma.

## Saídas e retomada
Todas as telas finais oferecem relatório/diário, menu e nova operação. O reinício exige confirmação. Pausar permite retomar, voltar ao menu com confirmação ou reiniciar com confirmação. O salvamento reconstrói ações verificadas e devolve o jogador ao mesmo ponto, inclusive feedback de acerto aguardando Continuar. Não há telas com tempo limite nem finais sem explicação.
