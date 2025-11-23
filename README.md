# Projeto Playwright - Testes E2E (SauceDemo)

Este repositório contém testes E2E escritos em JavaScript com `@playwright/test`, organizados usando o padrão Page Object Model (POM). Os testes automatizam um fluxo de compra no site `https://www.saucedemo.com`.

**Resumo dos cenários cobertos:**
- **Login:** efetuar login com as credenciais públicas.
- **Navegação e pesquisa:** navegar até produtos e selecionar um item.
- **Validação do produto:** verificar título, preço e descrição.
- **Adicionar ao carrinho e checkout:** adicionar ao carrinho e iniciar checkout.
- **Finalização de pedido:** preencher dados de envio e finalizar o pedido.

**Requisitos:**
- **Node.js:** versão compatível com Playwright (recomenda-se Node 18+).
- **Dependências dev:** `@playwright/test` (declarado em `package.json`).

**Instalação (Bash / Git Bash / WSL / CMD / PowerShell)**

1. No diretório do projeto, instale dependências:

```bash
cd /c/Users/julia/Documents/playwrigth/projeto-auvo
npm install
npx playwright install
```

> Observação: no PowerShell pode haver política de execução que bloqueie scripts (`npx`). Se receber erro de `ExecutionPolicy`, rode o comando em `cmd` ou `Git Bash`

**Scripts úteis (em `package.json`):**
- `test`: `playwright test` — roda os testes em modo headless.
- `test:headed`: `playwright test --headed` — roda com navegador visível.
- `test:debug`: `playwright test --debug` — abre UI de debug do Playwright.


Ou simplesmente:

```bash
npm test
```

**Configuração do Playwright**
- O arquivo `playwright.config.js` está configurado em CommonJS e contém as opções principais do projeto:
  - `baseURL: 'https://www.saucedemo.com'` — facilita usar rotas relativas.
  - `headless: true` — execução padrão sem UI.
  - `screenshot: 'only-on-failure'` — captura tela em falhas.
  - `trace: 'on-first-retry'` — coleta trace quando re-tentando.
  - `retries: 0` e projeto apenas para `chromium` (Desktop Chrome).

Se quiser reabilitar múltiplos projetos (Firefox/WebKit), posso ajustar o `playwright.config.js`.

**Estrutura do projeto (principais arquivos)**
- `pages/` — Page Objects:
  - `login.page.js` — ações e seletores da tela de login.
  - `products.page.js` — lista e ações na página de produtos.
  - `product.page.js` — detalhes do produto.
  - `cart.page.js` — carrinho e ações relacionadas.
  - `checkout.page.js` — fluxo de checkout.
- `tests/` — testes:
  - `e2e.spec.js` — fluxo E2E completo cobrindo os passos principais.
- `playwright.config.js` — configuração de execução do Playwright.
- `package.json` — scripts e dependências.

**Como os testes usam o POM**
- Os testes instanciam classes de `pages/*` passando a fixture `page` do Playwright. Isso mantém os seletores e ações desacoplados dos casos de teste, facilitando manutenção e reuso.

**Execução local recomendada (passo a passo rápido)**

```bash
cd /c/Users/julia/Documents/playwrigth/projeto-auvo
npm install
npx playwright install
npm test
```

Para depurar interativamente use:

```bash
npx playwright test --headed
```

