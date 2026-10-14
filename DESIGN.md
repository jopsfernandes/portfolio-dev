# DESIGN.md

Mundo visual do portfolio: **cartaz concretista brasileiro** (Grupo Ruptura, Wollner, ESDI).
Campos inteiros de cor, geometria de quartos de círculo e uma grotesca larga.

## Cores (tokens em `app/globals.css`)

| Token | Uso |
|---|---|
| `--paper` | fundo claro frio (Sobre, Projetos, header) |
| `--ink` | texto e fundo das seções escuras (Habilidades, rodapé) |
| `--cobalt` | campo do hero, ações primárias, foco em fundos claros |
| `--signal` | nome no hero, botão principal sobre cobalto, campo do Contato, seleção de texto |
| `--cobalt-deep`, `--signal-deep`, `--cobalt-tint` | peças da composição e formas de apoio |

Ritmo das seções: cobalto → papel → tinta → papel → amarelo → tinta.

## Tipografia

- **Archivo** (variável, eixo `wdth`), via `next/font/google`.
  - `font-display`: largura 125%, peso 800, tracking -0.035em. Títulos de seção e nomes de projeto, máx. 6rem.
  - `font-wide`: largura 112%. Rótulos, botões, navegação.
- **Geist Mono** só para código e dados (logo `<Jops/>`, lista de tecnologias dos projetos).

## Componentes

- Cantos retos (`--radius: 0`). Botões são blocos sólidos ou contorno de 2px; hover troca o campo de cor.
- Sem cards como estrutura: listas com fios (`border-t-2 border-ink` + fios finos).
- Capturas de projeto em duotone tinta-sobre-cobalto (`.duotone`; `.duotone-invert` para capturas escuras); cor original no hover.

## Movimento

Um momento só: as peças da composição do hero giram até o lugar ao carregar e giram 90° quando o cursor passa.
Tudo respeita `prefers-reduced-motion`.
