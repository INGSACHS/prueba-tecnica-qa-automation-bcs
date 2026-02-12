import { test, expect } from '../fixtures/test-fixtures';
import { USERS } from '../utils/testData';

test.describe('Onboarding @P0', () => {

    test('TC01 @P0 Login exitoso', async ({ loginPage, page }) => {
        await loginPage.navigate('/login');
        await loginPage.login(USERS.valid.username, USERS.valid.password);
        await expect(page.locator('text=Bienvenido')).toBeVisible();
    });

    test('TC02 @P0 Login fallido', async ({ loginPage }) => {
        await loginPage.navigate('/login');
        await loginPage.login(USERS.valid.username, USERS.invalid.password);
        await expect(loginPage.errorMessage()).toBeVisible();
    });

    test('TC03 @P0 Campos obligatorios', async ({ loginPage }) => {
        await loginPage.navigate('/login');
        await loginPage.clickLogin();
        await expect(loginPage.requiredError()).toBeVisible();
    });

    test('TC04 @P0 Captcha inválido (intercept)', async ({ loginPage, page }) => {

        await page.route('**/validate-captcha', async route => {
            await route.fulfill({
                status: 400,
                contentType: 'application/json',
                body: JSON.stringify({ error: 'Captcha inválido' })
            });
        });

        await loginPage.navigate('/login');
        await loginPage.login(USERS.valid.username, USERS.valid.password);

        await expect(loginPage.errorMessage()).toContainText('Captcha');
    });

});
