import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    screenshotOnRunFailure: true,
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',
    baseUrl: 'http://localhost:4200',
    projectId: 'vij7ps' // เพิ่ม projectId ที่นี่
  },
});
