# Jornada Shinobi

Portfólio pessoal de **Douglas Melo Silva**, desenvolvedor de IA (IA generativa, agentes e automação), com narrativa inspirada no universo de Naruto. Os rótulos shinobi (Genin, Chunin, Ninjutsu, Rank D a S) são linguagem de apresentação, não equivalência com cargos.

> Status: em construção. Esta é a primeira versão do projeto.

## Tecnologias

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) (`react-router-dom`)
- CSS puro, com variáveis de cor e modo escuro automático (`prefers-color-scheme`)

## Como rodar

Pré-requisito: Node.js 20.19 ou superior.

```bash
git clone <URL-DO-SEU-REPOSITORIO>
cd jornada-shinobi
npm install
npm run dev
```

O site abre em `http://localhost:5173`.

Outros comandos:

```bash
npm run build     # gera a versão de produção em dist/
npm run preview   # serve a versão de produção localmente
```

## Estrutura

```
src/
├── components/
│   ├── Skills.tsx      # Habilidades por escola (Ninjutsu, Taijutsu, Genjutsu...)
│   ├── About.tsx       # Sobre mim: comparação entre as trajetórias
│   ├── Projects.tsx    # Projetos como missões, com rank
│   └── Contacts.tsx    # Contatos
├── data.ts             # Todo o conteúdo do site (habilidades, projetos, contatos...)
├── Home.tsx            # Página inicial com menu e seções
├── App.tsx             # Rotas
├── main.tsx            # Ponto de entrada
└── index.css           # Estilos globais e variáveis de cor
```

## Rotas

| Rota | Conteúdo |
|---|---|
| `/` | Home, com as seções de Habilidades, Projetos e Contatos |
| `/sobre` | Sobre mim |

## Como editar o conteúdo

Todo o texto e os dados ficam em `src/data.ts`, separados do código dos componentes. Para atualizar o site, edite o arquivo, sem mexer nos componentes:

- `skillGroups`: grupos de habilidades e nível (`Genin`, `Chunin` ou `Jounin`)
- `parallels`: pontos da comparação da página Sobre mim
- `projects`: projetos, com rank (`D` a `S`), área, status, tecnologias e repositório opcional
- `contacts`: links de contato

Os tipos (`Tech`, `Rank`, `Area`, `Status`) são uniões fechadas. Se escrever uma tecnologia ou rank que não existe, o TypeScript avisa antes de rodar.

## Roadmap

- [x] Estrutura do projeto e rotas
- [x] Habilidades
- [x] Sobre mim
- [x] Projetos e Contatos (versão inicial)
- [ ] Menu fixo com destaque da seção atual
- [ ] Facetas (abas de contratos de invocação)
- [ ] Filtros e busca na seção Projetos
- [ ] Alternância manual de tema claro e escuro
- [ ] Publicação (Vercel ou Netlify)

## Deploy

O projeto usa `BrowserRouter`, que funciona bem na Vercel e na Netlify. Para o GitHub Pages, troque por `HashRouter` em `src/main.tsx`.

## Contato

- GitHub: [github.com/DouglasMSilva](https://github.com/DouglasMSilva)
- LinkedIn: [linkedin.com/in/douglas-melo-dev](https://linkedin.com/in/douglas-melo-dev)
- E-mail: melosilvadouglas7@gmail.com
