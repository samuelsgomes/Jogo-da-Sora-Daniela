# Validação matemática — anterior aos desafios

## Unidades, intervalo e hipóteses
`t` é o tempo em minutos desde a emissão; `N` é o alcance acumulado em pessoas distintas. Intervalo observado: 0 ≤ t ≤ 6. No modelo linear há 50 novos contatos por minuto. No exponencial o alcance dobra por minuto, sem sobreposição. Os dados de Nexus são fictícios. Crescimento exponencial constante é uma simplificação: população finita, contatos repetidos e mudanças de comportamento limitam a propagação. Associação entre variáveis não prova causalidade.

## Exemplo 1: linear
Modelo N(t) = 100 + 50t. Estratégia: substituir o tempo e respeitar a ordem das operações.
1. Em t = 3: N(3) = 100 + 50 × 3.
2. 50 × 3 = 150.
3. 100 + 150 = 250 pessoas.
Conferência independente: somar 50 a cada minuto: 100 → 150 → 200 → 250. Substituição: 250 = 100 + 50 × 3. Diferenças constantes de 50, razões não constantes.

## Exemplo 2: exponencial
Modelo N(t) = 100 × 2^t. Estratégia: calcular primeiro a potência.
1. Em t = 3: 2³ = 8.
2. N(3) = 100 × 8 = 800 pessoas.
Conferência independente por duplicações: 100 → 200 → 400 → 800. Substituição: 800 = 100 × 2³. A razão é 2, mas as diferenças são 100, 200, 400.

## Exemplo 3: logaritmo e tempo de alcance
Quando o modelo exponencial atinge 1.600 pessoas?
1. 1.600 = 100 × 2^t.
2. Dividir por 100: 16 = 2^t.
3. Inverter a exponencial: t = log₂(16) = 4 minutos.
Conferência independente: quatro duplicações de 100 dão 1.600. Substituindo t = 4: 100 × 2⁴ = 1.600.
Se o alvo é 1.000, o tempo contínuo é log₂(10) ≈ 3,322 min. Observando apenas minutos inteiros, o primeiro registro que atinge ou supera o alvo ocorre em 4 min (800 em 3 min; 1.600 em 4 min).

## Outros invariantes usados no jogo
- Linear em 4 min: 300; exponencial em 4 min: 1.600.
- Canal novo de 50 contatos dobrando em 3 min: 400.
- 800 pessoas reduzidas em 25%: 600; reduzir 25% é multiplicar por 0,75.
- Campanha A: 120/4 = 30 contatos únicos por unidade de energia; B: 180/9 = 20.
- Correção em 3 min: 100 + 200 × 3 = 700; boato em 3 min: 100 × 2³ = 800. A correção fica 100 pessoas atrás.
- Registro de auditoria: 8 blocos por minuto; 48 blocos exigem 6 minutos.
- População monitorada: 5.000; extrapolar 100 × 2⁶ = 6.400 contatos únicos viola esse limite.
