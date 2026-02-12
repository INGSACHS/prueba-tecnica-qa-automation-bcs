import { Page } from '@playwright/test';
import { ENV } from '../config/environment';

export class BasePage {

    constructor(protected page: Page) { }

    async navigate(path: string) {
        await this.page.goto(`${ENV.apiUrl}/${path}`);
    }
}
