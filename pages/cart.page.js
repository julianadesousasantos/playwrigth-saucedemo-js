class CartPage {
  constructor(page) {
    this.page = page;

    this.cartItem = '.cart_item';
    this.checkoutBtn = '[data-test="checkout"]';
  }

  async hasItems() {
    return this.page.isVisible(this.cartItem);
  }

  async checkout() {
    await this.page.click(this.checkoutBtn);
  }
}

module.exports = { CartPage };
