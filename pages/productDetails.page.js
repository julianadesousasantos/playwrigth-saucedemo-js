class ProductDetailsPage {
  constructor(page) {
    this.page = page;

    this.title = '.inventory_details_name';
    this.price = '.inventory_details_price';
    this.description = '.inventory_details_desc';
    this.addToCartButton = 'button:has-text("Add to cart")';
  }

  async getTitle() {
    return this.page.textContent(this.title);
  }

  async getPrice() {
    return this.page.textContent(this.price);
  }

  async getDescription() {
    return this.page.textContent(this.description);
  }

  async addToCart() {
    await this.page.click(this.addToCartButton);
  }
}

module.exports = { ProductDetailsPage };
