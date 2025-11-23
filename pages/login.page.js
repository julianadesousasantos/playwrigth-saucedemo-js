
class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginButton = '#login-button';
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}

module.exports = { LoginPage };
