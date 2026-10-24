# Fluxograma completo

Cada partida resolve exatamente 15 terminais. Há 18 desafios escritos: os alternativos ocupam as mesmas posições na sequência. As bifurcações retornam à investigação principal depois de desafios e informações específicos.

```mermaid
flowchart TD
    M[Menu inicial] -->|Nova operação| B1[Capítulo 1: Sinal Perdido]
    M -->|Retomar salvamento válido| S[Reconstruir ações e voltar ao ponto salvo]
    S --> J[Estado atual: capítulo, terminal, decisão ou final]
    B1 --> T1[01: valor inicial / pista 01]
    T1 --> T2[02: tabela linear x exponencial]
    T2 --> T3[03: gráfico e sensor / pista 02]
    T3 --> T4[04: corrigir causalidade]
    T4 --> T5[05: limite populacional / pista 03]
    T5 --> B2[Capítulo 2: A Rede de Mentiras]
    B2 --> D1{Decisão de rota}
    D1 -->|Praça: -8 energia, +2 confiança| P6[06: previsão com pistas anteriores]
    D1 -->|Torre: -12 energia| Q6[06: previsão com pistas anteriores]
    P6 --> P7[07: tabela de eficiência de campanhas]
    P7 --> P8[08: selecionar parâmetros / cópia comunitária do log / pista 04]
    Q6 --> Q7[07: canal com condição inicial 50]
    Q7 --> Q8[08: ordenar algoritmo / cópia técnica do log / pista 04]
    P8 --> T9[09: redução de 25%]
    Q8 --> T9
    T9 --> T10[10: gráfico boato x correção / pista 05]
    T10 --> B3[Capítulo 3: Código Final]
    B3 --> D2{Decisão de acesso}
    D2 -->|Auditoria: -10 energia, +2 confiança| O11[11: logaritmo e tempo até 1600]
    D2 -->|Isolamento: -4 energia| I11[11: primeiro minuto inteiro até 1000]
    O11 --> T12[12: cofre / pistas 04 e 05 / 48 dividido por 8]
    I11 --> T12
    T12 --> T13[13: associar três modelos]
    T13 --> T14[14: log de ZERO e conclusões sustentadas]
    T14 --> T15[15: previsão com hipóteses e revisão]
    T15 --> D3{Destino de Nexus}
    D3 -->|Descentralizar| F3[As ilhas de luz]
    D3 -->|Supervisão central| F4[O guardião vigiado]
    D3 -->|Restaurar| R{Pontos >= 1000 e 5 pistas e confiança >= 2 e energia >= 15?}
    R -->|Sim| F1[Nexus amanhece]
    R -->|Não| F2[Uma cidade em revisão]
    subgraph Regras_em_todo_terminal
      A[Enviar resposta] --> V{Validação matemática ou evidencial}
      V -->|Incorreta| E[-7 energia e feedback específico]
      E --> Z{Energia maior que zero?}
      Z -->|Sim| A
      Z -->|Não| F0[A última reserva: operação interrompida]
      V -->|Correta| OK[Pontos, +3 energia, pista quando prevista]
      OK --> NEXT[Botão Continuar / próximo nó da rota]
      H[Dica confirmada: -4 energia / -15 pontos / uma vez] --> A
      CELL[Célula confirmada: +20 energia / -30 pontos / duas] --> A
    end
    J --> A
    J --> PAUSE[Pausa / diário / instruções]
    PAUSE -->|Retomar| J
    PAUSE -->|Confirmar saída| M
    PAUSE -->|Confirmar reinício| B1
    F0 --> REL[Relatório, diário, menu e reinício]
    F1 --> REL
    F2 --> REL
    F3 --> REL
    F4 --> REL
    REL --> M
```

As decisões têm confirmação: cancelar volta ao ponto anterior. A dica não é cobrada novamente. Resposta já validada não pontua duas vezes. Sem energia, só há relatório/menu/reinício. Salvamento inválido abre o menu e permite iniciar uma nova operação. Nenhuma janela prende o jogador: há botão Fechar e suporte a Esc.
