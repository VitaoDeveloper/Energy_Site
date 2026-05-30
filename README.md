<div align="center">
  <br />
  <img src="public/favicon.svg" alt="VentoBR" width="64" height="64" />
  <h1 align="center">VentoBR — Energia Eólica Brasileira</h1>
  <p align="center">
    <strong>🌬️ Um site informativo sobre energia eólica — a força dos ventos a serviço da humanidade.</strong>
    <br />
    <em>An educational website about wind energy — the power of wind at humanity's service.</em>
  </p>
  <p align="center">
    <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19" />
    <img src="https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript" alt="TypeScript 6" />
    <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite" alt="Vite 8" />
    <img src="https://img.shields.io/badge/license-MIT-green" alt="MIT License" />
  </p>
  <br />
</div>

---

## 📖 Sobre | About

**🇧🇷 PT:** VentoBR é um site educacional que explica de forma simples e visual os fundamentos da energia eólica: como funciona, tipos de turbinas, vantagens e desafios. Ideal para estudantes, curiosos e qualquer pessoa interessada em energias renováveis.

**🇬🇧 EN:** VentoBR is an educational website that explains the fundamentals of wind energy in a simple and visual way: how it works, turbine types, benefits, and challenges. Perfect for students, curious minds, and anyone interested in renewable energy.

---

## 🚀 Tecnologias | Tech Stack

| Tecnologia / Technology   | Versão / Version |
| ------------------------- | ---------------- |
| [React](https://react.dev) | 19               |
| [TypeScript](https://www.typescriptlang.org) | 6                |
| [Vite](https://vite.dev) | 8                |
| [React Router](https://reactrouter.com) | 7                |
| [ESLint](https://eslint.org) | 10               |

---

## 📂 Estrutura | Structure

```
src/
├── components/       # Componentes reutilizáveis (Navbar, Hero, Footer, etc.)
│   ├── CTA.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── ScrollToTop.tsx
│   └── Stats.tsx
├── pages/            # Páginas principais
│   ├── Home.tsx          # Landing page
│   ├── HowWorks.tsx      # Como funciona
│   ├── TurbinesTypes.tsx # Tipos de turbinas
│   ├── Benefits.tsx      # Vantagens
│   └── Challenges.tsx    # Desafios
├── App.tsx           # Rotas
├── App.css           # Estilos globais
├── index.css         # Reset e variáveis CSS
└── main.tsx          # Entry point
```

---

## 🛠️ Como rodar | Getting Started

```bash
# Clone o repositório | Clone the repository
git clone https://github.com/VitaoDeveloper/Energy_Site.git
cd Energy_Site

# Instale as dependências | Install dependencies
pnpm install

# Inicie o servidor de desenvolvimento | Start dev server
pnpm dev

# Build para produção | Build for production
pnpm build

# Preview do build | Preview production build
pnpm preview
```

---

## 📄 Páginas | Pages

| Rota / Route             | Conteúdo / Content                         |
| ------------------------ | ------------------------------------------ |
| `/`                      | Landing page com visão geral e dados       |
| `/how-works`             | Como a energia eólica é gerada             |
| `/types`                 | Tipos de turbinas (onshore, offshore, eixos) |
| `/benefits`              | Vantagens e comparação com outras fontes   |
| `/challenges`            | Desafios e soluções em desenvolvimento     |

---

## 🎨 Funcionalidades | Features

- **Turbina SVG animada** — rotação 3D com sweeps de vento
- **Design responsivo** — adaptado para desktop e mobile
- **Navegação entre tópicos** — botões "Anterior / Próximo" nas páginas
- **Scroll suave** — `ScrollToTop` automático ao trocar de rota
- **Paleta de cores naturais** — tons de verde, azul e areia remetendo à natureza

---

## 📚 Fontes | References

- [Wikipedia — Energia eólica](https://pt.wikipedia.org/wiki/Energia_e%C3%B3lica)
- [IRENA — Wind Energy](https://www.irena.org/Energy-Transition/Technology/Wind-energy)
- [GWEC — Global Wind Energy Council](https://gwec.net/)

---

## 👨‍💻 Autor | Author

Projeto pessoal criado para aprendizado e portfólio.  
_Personal project created for learning and portfolio._

[![GitHub](https://img.shields.io/badge/GitHub-VitaoDeveloper-181717?logo=github)](https://github.com/VitaoDeveloper)

---

<p align="center"><strong>Conteúdo educacional — 2026</strong></p>
