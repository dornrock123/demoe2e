import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    videosFolder: 'cypress/videos',
    baseUrl: 'http://localhost:4200',
    projectId: 'vij7ps' // เพิ่ม projectId ที่นี่
  },
});
