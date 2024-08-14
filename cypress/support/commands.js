// cypress/support/commands.js
// Example custom command
Cypress.Commands.add('login', (email, password) => {
  cy.get('#email').type(email)
  cy.get('#password').type(password)
  cy.get('#login-button').click()
})
// Add any custom commands here
