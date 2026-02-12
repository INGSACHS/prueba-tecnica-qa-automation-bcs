import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginBtn = page.locator('#loginBtn');
    }

    async login(user: string, pass: string) {
        await this.usernameInput.fill(user);
        await this.passwordInput.fill(pass);
        await this.loginBtn.click();
    }

    async clickLogin() {
        await this.loginBtn.click();
    }

    errorMessage() {
        return this.page.locator('#errorMsg');
    }

    requiredError() {
        return this.page.locator('.required-error');
    }

}
