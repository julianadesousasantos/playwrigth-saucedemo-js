📘 Automação Web com Playwright (JavaScript) | SauceDemo
🧪 Descrição do Projeto

Este repositório contém uma automação completa do fluxo de compra no site SauceDemo (https://www.saucedemo.com/
) utilizando:

Playwright Test

JavaScript

Page Object Model (POM)

Boas práticas de QA 

O objetivo é demonstrar habilidades práticas em automação web, organização de código, estruturação de testes e criação de cenários end-to-end estáveis.

⚙️ Tecnologias Utilizadas

Node.js

Playwright

JavaScript (ES6+)

Estrutura POM

Relatórios HTML

Git + GitHub

🚀 Como Executar o Projeto
🔧 1. Instalar dependências
npm install

🧩 2. Instalar os browsers do Playwright
npx playwright install

▶ 3. Executar todos os testes
npm test

🖥️ 4. Executar vendo o navegador (headed mode)
npm run test:headed

🐞 5. Modo debug (execução passo a passo)
npx playwright test --debug

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


🧱 Cenários Automatizados
✔ 1. Login

Login com credenciais válidas (standard_user / secret_sauce)

✔ 2. Navegação e “Pesquisa”

Listagem dos produtos

Busca por produto através da lista (pseudopesquisa)

✔ 3. Validação do Produto

Nome

Preço

Descrição

✔ 4. Carrinho + Checkout

Adicionar item ao carrinho

Acessar carrinho

Preencher dados

Finalizar compra

✔ 5. Confirmação de Pedido

Verificar mensagem de sucesso

🏗 Arquitetura Page Object Model (POM)

Cada página do sistema possui sua própria classe no diretório pages/.
Isso garante:

Código reutilizável

Maior organização

Testes mais limpos

Facilidade de manutenção

Exemplo de uso:
const login = new LoginPage(page);
await login.goto();
await login.login('standard_user', 'secret_sauce');


✨ Diferenciais do Projeto


Configuração de slow motion (slowMo)

Teste robusto e completo

Estrutura modular com POM

Relatórios HTML automáticos

Código limpo e legível 



