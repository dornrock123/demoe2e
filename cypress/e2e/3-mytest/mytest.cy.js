// cypress/e2e/app.cy.js

describe('App End-to-End Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200'); // Adjust the URL to your app's local or test environment
  });

  it('should display the welcome messa', () => {
    cy.get('.toolbar').should('be.visible');
    cy.get('.highlight-card').should('contain.text', 'app is running!');
  });

  it('should have functional social media links', () => {
    cy.get('[aria-label="Angular on twitter"]').should('have.attr', 'href', 'https://twitter.com/angular');
    cy.get('[aria-label="Angular on YouTube"]').should('have.attr', 'href', 'https://youtube.com/angular');
  });

  it('should display the correct initial message', () => {
    cy.contains('h2', 'Next Steps').should('be.visible')
    cy.contains('p', 'What do you want to do next with your app?').should('be.visible')
  })

  it('should update selection value when New Component button is clicked', () => {
    cy.get('button').contains('New Component').click()
    cy.get('input[type="hidden"]').should('have.value', 'component')
    cy.get('.terminal pre').should('have.text', 'ng generate component xyz')
  })

  it('should update selection value when Angular Material button is clicked', () => {
    cy.get('button').contains('Angular Material').click()
    cy.get('input[type="hidden"]').should('have.value', 'material')
    cy.get('.terminal pre').should('have.text', 'ng add ')
  })

  it('should update selection value when Add PWA Support button is clicked', () => {
    cy.get('button').contains('Add PWA Support').click()
    cy.get('input[type="hidden"]').should('have.value', 'pwa')
    cy.get('.terminal pre').should('have.text', 'ng add ')
  })

  it('should update selection value when Add Dependency button is clicked', () => {
    cy.get('button').contains('Add Dependency').click()
    cy.get('input[type="hidden"]').should('have.value', 'dependency')
    cy.get('.terminal pre').should('have.text', 'ng add _____')
  })

  it('should update selection value when Run and Watch Tests button is clicked', () => {
    cy.get('button').contains('Run and Watch Tests').click()
    cy.get('input[type="hidden"]').should('have.value', 'test')
    cy.get('.terminal pre').should('have.text', 'ng test')
  })

  it('should update selection value when Build for Production button is clicked', () => {
    cy.get('button').contains('Build for Production').click()
    cy.get('input[type="hidden"]').should('have.value', 'build')
    cy.get('.terminal pre').should('have.text', 'ng build')
  })
});
