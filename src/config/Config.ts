import dotenv from 'dotenv';

dotenv.config();

function booleanFromEnv(value: string | undefined, defaultValue: boolean): boolean {
  if (value === undefined) {
    return defaultValue;
  }

  return value.toLowerCase() === 'true';
}

function numberFromEnv(value: string | undefined, defaultValue: number): number {
  if (value === undefined) {
    return defaultValue;
  }

  const parsed = Number(value);

  if (Number.isNaN(parsed)) {
    return defaultValue;
  }

  return parsed;
}

export const Config = {
  baseUrl: process.env.BASE_URL ?? 'https://opencart.abstracta.us/',
  headless: booleanFromEnv(process.env.HEADLESS, true),
  logLevel: process.env.LOG_LEVEL ?? 'info',
  testTimeout: numberFromEnv(process.env.TEST_TIMEOUT, 60_000),
  expectTimeout: numberFromEnv(process.env.EXPECT_TIMEOUT, 10_000)
} as const;
