import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SimuladorPage extends BasePage {

    readonly montoInput: Locator;
    readonly plazoInput: Locator;
    readonly simularBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.montoInput = page.locator('#monto');
        this.plazoInput = page.locator('#plazo');
        this.simularBtn = page.locator('#simularBtn');
    }

    async simular(monto: number, plazo: number) {
        await this.montoInput.fill(monto.toString());
        await this.plazoInput.fill(plazo.toString());
        await this.simularBtn.click();
    }

    result() {
        return this.page.locator('#resultado');
    }
}
