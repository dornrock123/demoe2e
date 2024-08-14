// cypress/e2e/app.cy.js

describe('App End-to-End Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200'); // Adjust the URL to your app's local or test environment
  });

  it('should display the welcome message', () => {
    cy.get('.toolbar').should('be.visible');
    cy.get('.highlight-card').should('contain.text', 'app is running!');
  });

  it('should have functional social media links', () => {
    cy.get('[aria-label="Angular on twitter"]').should('have.attr', 'href', 'https://twitter.com/angular');
    cy.get('[aria-label="Angular on YouTube"]').should('have.attr', 'href', 'https://youtube.com/angular');
  });
});
