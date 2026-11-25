import { loginLocators } from '../locators/loginLocators';

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.loc = loginLocators(page);
    }

    async goto() {
        await this.page.goto('/');
    }

    async login(user, password) {
        await this.loc.user.fill(user);
        await this.loc.password.fill(password);
        await this.loc.enter.click();
    }
}