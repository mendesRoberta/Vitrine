# Vitrine Tecnológica

Aplicação web de uma Vitrine Tecnológica. O projeto apresenta tecnologias desenvolvidas por instituições de pesquisa e facilita a descoberta dessas soluções por potenciais parceiros.

## Funcionalidades

- Catálogo de tecnologias com busca por palavra-chave, filtros por área, TRL e titular, e opções de ordenação.
- Páginas de detalhes para Notifica Belém, EasySSR, EnvinMon e SpeedyPipe4Meta (SP4M).
- Área de desafios tecnológicos com busca, detalhes e formulários de interesse/proposta.
- Navegação responsiva: menu lateral e filtros em telas menores, além de carrossel horizontal para os cards de benefícios.
- Formulários demonstrativos nas páginas de tecnologia e desafios.

## Tecnologias

- React 19
- TypeScript 6
- Tailwind CSS 4
- Vite 8
- Lucide React para ícones
- Oxlint para análise estática

## Requisitos

- Node.js `^20.19.0` ou `>=22.12.0`.
- npm, incluído na instalação do Node.js.

As imagens e os ícones da aplicação são locais. As fontes Hanken Grotesk e Manrope são carregadas do Google Fonts; sem acesso à internet, o navegador usará fontes alternativas.

## Executar localmente

1. Clone o repositório:

  ```bash
  git clone <URL-DO-REPOSITORIO>
  ```

2. Entre na pasta do projeto:

  ```bash
  cd <PASTA-DO-PROJETO>
  ```

3. Instale as dependências registradas no lockfile:

  ```bash
  npm ci
  ```

4. Inicie o servidor de desenvolvimento:

  ```bash
  npm run dev
  ```

5. Abra no navegador o endereço informado pelo Vite, normalmente `http://localhost:5173/`.

## Comandos disponíveis

```bash
npm run dev      # inicia o servidor de desenvolvimento
npm run build    # verifica os tipos e gera a versão de produção em dist/
npm run preview  # serve localmente a versão gerada em dist/
npm run lint     # executa o Oxlint
```

Para testar a versão de produção localmente, execute primeiro `npm run build` e depois `npm run preview`.

## Organização do projeto

- `src/App.tsx`: catálogo, navegação, estado dos filtros e ordenação.
- `src/components/`: páginas de detalhes das tecnologias, área de desafios e componentes relacionados.
- `src/assets/`: imagens e ícones locais.
- `public/`: arquivos estáticos servidos diretamente pelo Vite.

## Escopo atual

Esta versão é uma experiência de front-end. Os dados do catálogo e dos desafios estão definidos no código, e as interações dos formulários exibem uma confirmação local. Não há integração com API, envio de e-mail ou persistência dos dados submetidos.
