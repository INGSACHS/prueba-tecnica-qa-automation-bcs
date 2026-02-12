import { test, expect } from '../fixtures/test-fixtures';
import { SIMULATION } from '../utils/testData';

test.describe('Simulador @P1', () => {

    test('TC05 @P1 Simulación válida UI con mock backend', async ({ simuladorPage, page }) => {

        await page.route('**/simulador', async route => {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({
                    cuotaMensual: 450,
                    totalPagar: 5400
                })
            });
        });

        await simuladorPage.navigate('/simulador');
        await simuladorPage.simular(SIMULATION.valid.monto, SIMULATION.valid.plazo);

        await expect(simuladorPage.result()).toBeVisible();
    });

    test('TC06 @P1 Validar payload enviado', async ({ simuladorPage, page }) => {

        await page.route('**/simulador', async route => {
            const request = route.request();
            const postData = request.postDataJSON();

            expect(postData.monto).toBeGreaterThan(0);

            await route.continue();
        });

        await simuladorPage.navigate('/simulador');
        await simuladorPage.simular(SIMULATION.valid.monto, SIMULATION.valid.plazo);
    });

});
