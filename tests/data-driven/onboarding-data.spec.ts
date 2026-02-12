import { test, expect } from '../../fixtures/test-fixtures';
import { loadTestData } from '../../utils/dataLoader';
import { LoginData } from '../../types/testData';
import { mockCaptchaError } from '../../mocks/network';

const data = loadTestData<LoginData>('login.json');

test.describe('Onboarding', () => {

    data.forEach(d => {

        test(d.testId, async ({ loginPage, page }) => {

            if (d.expected === 'captcha') {
                await mockCaptchaError(page);
            }

            await loginPage.navigate('/login');
            await loginPage.login(d.username, d.password);

            if (d.expected === 'error' || d.expected === 'required') {
                await expect(loginPage.errorMessage()).toBeVisible();
            }
        });

    });

});
