const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/login.page');
const { ProductsPage } = require('../pages/products.page');
const { ProductDetailsPage } = require('../pages/productDetails.page');
const { CartPage } = require('../pages/cart.page');
const { CheckoutPage } = require('../pages/checkout.page');

test('Fluxo completo de compra no SauceDemo', async ({ page }) => {

  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const details = new ProductDetailsPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  // 1. Login
  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  expect(await products.isVisible()).toBeTruthy();

  // 2. Pesquisa de produto
  const product = await products.findProduct('backpack');
  expect(product).not.toBeNull();

  // 3. Validar produto
  await products.openProductDetails(product.name);

  const title = await details.getTitle();
  const price = await details.getPrice();
  const desc = await details.getDescription();

  expect(title).toContain(product.name);
  expect(price).toBe(product.price);
  expect(desc.length).toBeGreaterThan(0);

  // 4. Adicionar ao carrinho
  await details.addToCart();
  await products.goToCart();

  expect(await cart.hasItems()).toBeTruthy();

  // Checkout
  await cart.checkout();
  await checkout.fillInfo('Juliana', 'Sousa', '01000-000');
  await checkout.finishOrder();

  expect(await checkout.isOrderComplete()).toBeTruthy();
});
