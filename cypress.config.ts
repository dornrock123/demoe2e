import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:4200',
    projectId: '7dce4153-18c0-4b50-b66d-763b4cc34082' // เพิ่ม projectId ที่นี่
  },
});
