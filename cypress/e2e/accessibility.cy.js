describe('The Home Page Accessibility', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Has no detectable a11y violations on load', () => {
    cy.injectAxe()
    cy.checkA11y()
  })

})
