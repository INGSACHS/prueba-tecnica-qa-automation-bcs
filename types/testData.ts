export interface LoginData {
    testId: string;
    username: string;
    password: string;
    expected: string;
}

export interface SimuladorData {
    testId: string;
    monto: number;
    plazo: number;
    expectedStatus: number;
}

export interface ProductsData {
    testId: string;
    token?: string;
    expectedStatus: number;
}
