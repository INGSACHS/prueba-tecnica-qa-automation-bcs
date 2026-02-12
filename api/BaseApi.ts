import { APIRequestContext } from '@playwright/test';

export class BaseAPI {
    constructor(protected request: APIRequestContext) { }
}