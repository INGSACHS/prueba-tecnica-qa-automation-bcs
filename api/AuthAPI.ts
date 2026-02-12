import { APIRequestContext } from '@playwright/test';
import { ENV } from '../config/environment';

export class AuthAPI {
    constructor(private request: APIRequestContext) { }

    async login(user: string, password: string) {
        return await this.request.post(`${ENV.apiUrl}/login`, {
            data: { user, password }
        });
    }
}
