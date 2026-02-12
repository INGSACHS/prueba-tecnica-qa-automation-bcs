import { test, expect } from '../../fixtures/test-fixtures';
import { loadTestData } from '../../utils/dataLoader';
import { SimuladorData } from '../../types/testData';

const data = loadTestData<SimuladorData>('simulador.data.json');

test.describe('Simulador API', () => {

    data.forEach(d => {

        test(d.testId, async ({ simuladorAPI }) => {
            const response = await simuladorAPI.simular(d.monto, d.plazo);
            expect(response.status()).toBe(d.expectedStatus);
        });

    });

});
