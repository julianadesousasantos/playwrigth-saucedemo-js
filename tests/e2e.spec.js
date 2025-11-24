const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/login.page');
const { ProductsPage } = require('../pages/products.page');
const { ProductDetailsPage } = require('../pages/productDetails.page');
const { CartPage } = require('../pages/cart.page');
const { CheckoutPage } = require('../pages/checkout.page');

// Função de pausa para visualizar a execução
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

test('Fluxo completo de compra no SauceDemo', async ({ page }) => {

  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const details = new ProductDetailsPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  // 1. Login
  await delay(1500);
  await login.goto();

  await delay(1500);
  await login.login('standard_user', 'secret_sauce');

  await delay(1500);
  expect(await products.isVisible()).toBeTruthy();

  // 2. Pesquisa de produto
  await delay(1500);
  const product = await products.findProduct('backpack');
  expect(product).not.toBeNull();

  // 3. Validar produto
  await delay(1500);
  await products.openProductDetails(product.name);

  await delay(1500);
  const title = await details.getTitle();

  await delay(1500);
  const price = await details.getPrice();

  await delay(1500);
  const desc = await details.getDescription();

  expect(title).toContain(product.name);
  expect(price).toBe(product.price);
  expect(desc.length).toBeGreaterThan(0);

  // 4. Adicionar ao carrinho
  await delay(1500);
  await details.addToCart();

  await delay(1500);
  await products.goToCart();

  await delay(1500);
  expect(await cart.hasItems()).toBeTruthy();

  // 5. Checkout
  await delay(1500);
  await cart.checkout();

  await delay(1500);
  await checkout.fillInfo('Juliana', 'Sousa', '01000-000');

  await delay(1500);
  await checkout.finishOrder();

  await delay(1500);
  expect(await checkout.isOrderComplete()).toBeTruthy();
});
