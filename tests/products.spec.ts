import { test, expect } from '../fixtures/test-fixtures';

test.describe('Productos @P2', () => {

    test('TC09 @P2 Productos 200', async ({ productsAPI }) => {
        const response = await productsAPI.getProducts('validToken');
        expect(response.status()).toBe(200);
    });

    test('TC10 @P2 Simular error 500 UI', async ({ page }) => {

        await page.route('**/products', async route => {
            await route.fulfill({
                status: 500,
                body: JSON.stringify({ error: 'Internal Server Error' })
            });
        });

        await page.goto('/products');
        await expect(page.locator('text=Error')).toBeVisible();
    });

});
