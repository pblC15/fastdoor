# FastDoor · Portões e Automatismos

Landing page da FastDoor: serviços, trabalhos realizados, equipa e contacto rápido por WhatsApp e Instagram.

## Editar
- **Números de WhatsApp e mensagens automáticas:** no topo de `script.js`.
- **Fotos de trabalhos:** coloque a imagem em `assets/trabalhos/` e copie um `<li>` da galeria em `index.html` (procure ✏️).
- **Equipa:** fotos em `assets/equipa/`; nomes e funções na secção "A nossa equipa" do `index.html`.

## Publicar no GitHub Pages
1. Crie um repositório novo no GitHub (ex.: `fastdoor`).
2. Envie todos os ficheiros desta pasta, incluindo `assets/` e `.nojekyll`.
3. Em **Settings → Pages**, escolha *Deploy from a branch*, branch `main`, pasta `/ (root)` e clique **Save**.
4. Em 1–2 minutos o site fica em `https://SEU-UTILIZADOR.github.io/fastdoor/`.

## Estrutura
```
index.html          página
style.css           estilos
script.js           WhatsApp, galeria, visualizador de fotos e animação do portão
assets/logo.png     logótipo (fundo transparente)
assets/trabalhos/   fotos dos trabalhos
assets/equipa/      fotos da equipa
.nojekyll           evita processamento Jekyll
```
