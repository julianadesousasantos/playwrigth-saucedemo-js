class ProductsPage {
  constructor(page) {
    this.page = page;

    this.productItem = '.inventory_item';
    this.productName = '.inventory_item_name';
    this.cartLink = '.shopping_cart_link';
  }

  async isVisible() {
    return this.page.isVisible(this.productItem);
  }

  // Pesquisa simples por nome
  async findProduct(name) {
    const items = await this.page.$$(this.productItem);

    for (const item of items) {
      const productText = await item.$eval(
        '.inventory_item_name',
        el => el.textContent.trim()
      );

      if (productText.toLowerCase().includes(name.toLowerCase())) {
        const price = await item.$eval(
          '.inventory_item_price',
          el => el.textContent.trim()
        );
        return { name: productText, price };
      }
    }

    return null;
  }

  async openProductDetails(name) {
    await this.page.click(`text=${name}`);
  }

  async goToCart() {
    await this.page.click(this.cartLink);
  }
}

module.exports = { ProductsPage };
