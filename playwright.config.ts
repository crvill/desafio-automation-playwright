import { defineConfig, devices } from '@playwright/test';
import { Config } from '@/config';

export default defineConfig({
  testDir: './src/tests',
  timeout: Config.testTimeout,
  expect: {
    timeout: Config.expectTimeout
  },
  fullyParallel: false,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['junit', { outputFile: 'test-results/junit.xml' }]
  ],
  use: {
    baseURL: Config.baseUrl,
    headless: Config.headless,
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});
