describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should show scroll-to-top button and scroll the page to top on click', () => {
    const windowTopPosition = 0
    const minimumScrollPositionToDisplayScrollToTopButton = 3001

    cy.get('#scroll-to-top').should('not.be.visible')
    cy.scrollTo(windowTopPosition, minimumScrollPositionToDisplayScrollToTopButton)
    cy.get('#scroll-to-top').should('be.visible')
    cy.get('#scroll-to-top').click()
    cy.window().its('scrollY').should('equal', 0)
  })

  it('should find the Pickup Location label and fill the input ', () => {
    cy.findByLabelText('Pickup Location').type('Warsaw')
  })

  it('should find the Drop-off Location label and fill the input ', () => {
    cy.findByLabelText('Drop-off Location').type('Warsaw')
  })

  it('should find the Date From label and fill the input ', () => {
    cy.findByLabelText('Date From').type('2023-12-01')
  })

  it('should find the Pick-up Time label and select value ', () => {
    cy.findByLabelText('Pick-up Time').select('10:00')
  })

  it('should find the Date To label and fill the input ', () => {
    cy.findByLabelText('Date To').type('2023-12-10')
  })

  it('should find the Drop-off Time label and select value ', () => {
    cy.findByLabelText('Drop-off Time').select('10:00')
  })

  it('should find the Is driver over 25 years old? and check the input ', () => {
    cy.findByLabelText('Is driver over 25 years old?').check()
  })

  it('should find the I have discount code and check the input ', () => {
    cy.findByLabelText('I have discount code').check()
  })

  it('should find the Discount Code input and fill the input ', () => {
    cy.findByPlaceholderText('Discount Code').should('not.be.visible')
    cy.findByLabelText('I have discount code').check()
    cy.findByPlaceholderText('Discount Code').should('be.visible').type('A1B2B3')
  })

})
