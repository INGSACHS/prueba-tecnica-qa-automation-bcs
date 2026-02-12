import { defineConfig, devices } from '@playwright/test';
import { ENV } from './config/environment';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 1,
  use: {
    baseURL: ENV.baseUrl,
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    video: 'on-first-retry'
  },
  projects: [
    { name: 'UI' },
    { name: 'API', testMatch: /.*products.*|.*simulador.*/ }
  ]
});
