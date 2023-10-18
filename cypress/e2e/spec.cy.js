describe('The Home Page', () => {

  it('successfully loads', () => {
    cy.visit('/')
  })

  it('test scroll to top', () => {
    cy.visit('/')
    cy.get('#scroll-to-top').should('exist', 'display', 'none')
    cy.scrollTo(0, 3001)
    cy.get('#scroll-to-top').should('exist', 'display', 'flex')
    cy.get('#scroll-to-top').click()
    cy.window().its('scrollY').should('equal', 0);
  })

  it('find car form submit', () => {
    cy.visit('/')
    cy.get('#bookingReservation').should('exist').then(() => {
      cy.get('#pickupLocation').should('exist').type("Warsaw")
      cy.get('#dropOffLocation').should('exist').type("Warsaw")
      cy.get('#pickupDate').should('exist').type("2023-12-01")
      cy.get('#pickupTime').should('exist').type("9:00")
      cy.get('#dropOffDate').should('exist').type("2023-12-10")
      cy.get('#pickupTime').should('exist').type("9:00")
      cy.get('#over25').should('exist').check({ force: true })

      cy.findByRole('button', {name: /Find Cars/i}).click()
    })
  })

})
