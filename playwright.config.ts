import { defineConfig } from '@playwright/test';

const buildName = 'Playwright Tags';
const ltUsername = process.env.LT_USERNAME;
const ltAccessKey = process.env.LT_ACCESS_KEY;

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
   // ✅ To define browser and OS combination. You can add a new project to add more browser+OS combinations
  projects: [
    {
      name: 'Chrome-Windows',
      use: {
        connectOptions: {
          wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
            JSON.stringify({
              browserName: 'Chrome',
              browserVersion: 'latest',
              'LT:Options': {
                platform: 'Windows 10',
                build: buildName,
                name: 'Chrome on Windows',
                user: ltUsername,
                accessKey: ltAccessKey
              }
            })
          )}`
        }
      }
    }
  ]
});
