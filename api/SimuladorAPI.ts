import { ENV } from '../config/environment';
import { BaseAPI } from '../api/BaseApi';

export class SimuladorAPI extends BaseAPI {

    async simular(monto: number, plazo: number) {
        return await this.request.post(`${ENV.apiUrl}/simulador`, {
            data: { monto, plazo }
        });
    }
}
