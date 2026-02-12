import { ENV } from '../config/environment';
import { BaseAPI } from '../api/BaseApi';

export class ProductsAPI extends BaseAPI {

    async getProducts(token?: string) {
        return await this.request.get(`${ENV.apiUrl}/products`, {
            headers: token ? { Authorization: `Bearer ${token}` } : {}
        });
    }

}
