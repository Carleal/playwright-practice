# Playwright Practice

![Playwright Tests](https://github.com/Carleal/playwright-practice/actions/workflows/playwright.yml/badge.svg)

Projeto de testes automatizados end-to-end com **Playwright** e **JavaScript**, criado para praticar a estrutura de um projeto de automação: Page Object, fixtures, dados de teste separados, variáveis de ambiente e integração com CI/CD.

A aplicação testada é o [Sauce Demo](https://www.saucedemo.com), um site de demonstração criado para treinar automação de testes.

## Tecnologias

- [Playwright](https://playwright.dev) (`@playwright/test`)
- JavaScript (ES Modules)
- Node.js
- dotenv (variáveis de ambiente)
- GitHub Actions (CI)

## Cenários cobertos

| Área | Cenário |
|---|---|
| Login | Login com credenciais válidas redireciona para o inventário |
| Login | Login com credenciais inválidas exibe a mensagem de erro |
| Carrinho | Adicionar um item ao carrinho atualiza o contador |
| Carrinho | Remover um item do carrinho remove o contador |

## Estrutura do projeto

```
playwright-practice/
├─ .github/workflows/   # pipeline do GitHub Actions
├─ data/                # dados de teste (usuários)
├─ fixtures/            # fixtures customizadas (Page Objects prontos para uso)
├─ locators/            # seletores separados por página
├─ pages/               # Page Objects (ações de cada página)
├─ tests/               # arquivos de teste (.spec.js)
├─ .env.example         # modelo das variáveis de ambiente
└─ playwright.config.js # configuração do Playwright
```

## Decisões de projeto

- **Page Object:** cada página tem uma classe com as ações do usuário. Os testes ficam só com o cenário e as validações.
- **Locators separados:** os seletores de cada página ficam em um arquivo próprio (`locators/`). Se a interface mudar, o ajuste é feito em um único lugar.
- **Fixtures customizadas:** os Page Objects são entregues aos testes por `test.extend`, sem precisar de `new` em cada teste.
- **Asserções web-first:** uso de `expect(locator)` com retry automático, sem esperas fixas (`waitForTimeout`).
- **Dados de teste e segredos:** dados de teste ficam em `data/`. URL e credenciais vêm de variáveis de ambiente (`.env` local e *Secrets* no CI) e não são versionadas.
- **Testes independentes:** cada teste faz o próprio login e não depende da ordem de execução.

## Como rodar localmente

**Pré-requisitos:** Node.js (versão LTS) e Git.

1. Clone o repositório e instale as dependências:
   ```bash
   git clone https://github.com/SEU-USUARIO/playwright-practice.git
   cd playwright-practice
   npm ci
   npx playwright install
   ```

2. Crie o arquivo `.env` a partir do modelo e preencha os valores:
   ```bash
   cp .env.example .env
   ```
   No Windows (PowerShell): `copy .env.example .env`

   Variáveis usadas:
   ```
   BASE_URL=https://www.saucedemo.com
   STANDARD_USER=standard_user
   LOCKED_USER=locked_out_user
   USER_PASSWORD=secret_sauce
   ```
   > Essas credenciais são públicas e fornecidas pelo próprio Sauce Demo.

3. Execute os testes:
   ```bash
   npx playwright test
   ```

Outros comandos úteis:

```bash
npx playwright test --headed      # roda com o navegador visível
npx playwright test --ui          # modo interativo (UI Mode)
npx playwright show-report        # abre o relatório HTML da última execução
```

## CI/CD

Os testes rodam no **GitHub Actions** a cada `push` e `pull request` na branch `main`. O pipeline instala as dependências e os navegadores, executa os testes e publica o relatório HTML como artefato.

Para o pipeline funcionar, cadastre em **Settings > Secrets and variables > Actions**:

- **Variables:** `BASE_URL`
- **Secrets:** `STANDARD_USER`, `LOCKED_USER`, `USER_PASSWORD`

## Próximos passos

- [ ] Testes de API com a fixture `request` (restful-booker)
- [ ] Cenários de carrinho e checkout completos
- [ ] Ordenação de produtos e logout
- [ ] Autenticação reaproveitada com `storageState`
- [ ] Execução em múltiplos navegadores (Chromium, Firefox, WebKit)

## Autor

**Carlos Alexandre Dias Leal**
[LinkedIn](https://www.linkedin.com/in/carlos-alexandre-dias-leal)
