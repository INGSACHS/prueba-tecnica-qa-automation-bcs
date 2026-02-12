import { Page } from '@playwright/test';

export async function mockCaptchaError(page: Page) {
    await page.route('**/validate-captcha', route =>
        route.fulfill({ status: 400, body: 'Captcha inválido' })
    );
}

export async function mockSimuladorSuccess(page: Page) {
    await page.route('**/simulador', route =>
        route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({ cuota: 400 })
        })
    );
}
