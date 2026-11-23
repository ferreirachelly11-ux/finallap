# FinalLap — landing page

Projeto front-end responsivo inspirado na imagem de referência.

## Como executar
1. Extraia o ZIP.
2. Abra `index.html` no navegador ou use a extensão Live Server no VS Code.
3. É necessária conexão com a internet para carregar as fotografias remotas, Google Fonts e GSAP via CDN.

## Estrutura
- `index.html` — estrutura semântica da página.
- `css/style.css` — identidade visual, layout e breakpoints responsivos.
- `js/main.js` — menu mobile, formulários demonstrativos e animações GSAP/ScrollTrigger.

## Tecnologias
HTML5, CSS3, JavaScript, GSAP 3.12.5 e ScrollTrigger.

## Observações
- Os formulários estão configurados como demonstração visual; para captar contatos, conecte-os a uma API ou serviço de formulário.
- As fotografias são carregadas de URLs públicas do Unsplash. Elas são imagens automotivas de referência e podem não corresponder pixel a pixel às fotos do screenshot.
- O layout inclui suporte a `prefers-reduced-motion` e menu mobile com fechamento ao selecionar uma seção, pressionar Escape ou redimensionar para desktop.
