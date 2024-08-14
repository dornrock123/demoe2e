describe('Homepage', () => {
  it('should load successfully', () => {
    cy.visit('/')
    cy.get('h1').should('contain', 'Welcome')
  })

  it('can navigate to about page', () => {
    cy.visit('/')
    cy.get('a[href="/about"]').click()
    cy.url().should('include', '/about')
  })
})
