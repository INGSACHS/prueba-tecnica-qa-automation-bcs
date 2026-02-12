import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SimuladorPage } from '../pages/SimuladorPage';
import { ProductsAPI } from '../api/ProductsAPI';
import { SimuladorAPI } from '../api/SimuladorAPI';

type CreditFixtures = {
    loginPage: LoginPage;
    simuladorPage: SimuladorPage;
    productsAPI: ProductsAPI;
    simuladorAPI: SimuladorAPI;
};

export const test = base.extend<CreditFixtures>({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    simuladorPage: async ({ page }, use) => {
        await use(new SimuladorPage(page));
    },

    productsAPI: async ({ request }, use) => {
        await use(new ProductsAPI(request));
    },

    simuladorAPI: async ({ request }, use) => {
        await use(new SimuladorAPI(request));
    }

});

export { expect } from '@playwright/test';
