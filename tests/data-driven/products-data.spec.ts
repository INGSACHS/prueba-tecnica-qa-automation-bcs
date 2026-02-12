import { test, expect } from '../../fixtures/test-fixtures';
import { loadTestData } from '../../utils/dataLoader';
import { ProductsData } from '../../types/testData';

const data = loadTestData<ProductsData>('products.json');

test.describe('Products API', () => {

    data.forEach(d => {

        test(d.testId, async ({ productsAPI }) => {
            const response = await productsAPI.getProducts(d.token);
            expect(response.status()).toBe(d.expectedStatus);
        });

    });

});
