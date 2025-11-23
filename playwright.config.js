// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  // Tempo máximo por teste (opcional, mas útil)
  timeout: 60 * 1000,

  expect: {
    timeout: 10 * 1000
  },

  use: {
    headless: false,      // Abre o navegador
    slowMo: 1200,   // Deixa as ações lentas (800ms por ação)
    baseURL: 'https://www.saucedemo.com',       
    actionTimeout: 15000, // Ações têm até 15s para funcionar
    navigationTimeout: 20000, // Navegação tem até 20s

    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});
