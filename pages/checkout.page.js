class CheckoutPage {
  constructor(page) {
    this.page = page;

    this.firstName = '#first-name';
    this.lastName = '#last-name';
    this.zip = '#postal-code';
    this.continueBtn = '#continue';
    this.finishBtn = '#finish';
    this.confirmText = '.complete-header';
  }

  async fillInfo(first, last, postal) {
    await this.page.fill(this.firstName, first);
    await this.page.fill(this.lastName, last);
    await this.page.fill(this.zip, postal);
    await this.page.click(this.continueBtn);
  }

  async finishOrder() {
    await this.page.click(this.finishBtn);
  }

  async isOrderComplete() {
    return this.page.isVisible(this.confirmText);
  }
}

module.exports = { CheckoutPage };
