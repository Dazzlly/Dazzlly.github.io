# Notes

Portfólio Jekyll (GitHub Pages) customizado para Lucas Arruda Oliveira (Dazzlly).

- Dev: `docker compose -f docker-compose.base44.yml up -d` → http://localhost:3000 (Jekyll serve com `--force_polling`).
- Layout customizado em `_layouts/default.html` com includes (`_includes/navbar.html`, `_includes/footer.html`).
- Estilos em `assets/css/style.css` — paleta: preto/branco, azul cobalto (#0047AB) e ciano (#00D4FF).
- Scripts em `assets/js/main.js` — menu mobile, toggle de tema, fade-in no scroll, toggle Twitch/YouTube player, formulário de contato (mailto).
- Páginas: `index.html`, `hobbies.html`, `carreira.html`, `formacao.html`, `eventos.html`, `projetos.html`, `social.html`, `contato.html`.
- `Gemfile` foi adicionado para dev local; gems vivem no volume `gems`.
- Sem banco de dados, sem secrets. "GitHub Metadata: No GitHub API authentication" é inofensivo.
- Editar `_config.yml` requer `docker compose -f docker-compose.base44.yml restart web`; edições de conteúdo/páginas regeneram automaticamente.
- Player Twitch/YouTube: trocar `TWITCH_CHANNEL` e `YOUTUBE_CHANNEL` em `assets/js/main.js` para os canais reais.
- Links sociais: trocar URLs em `social.html` e `contato.html` para os perfis reais.
