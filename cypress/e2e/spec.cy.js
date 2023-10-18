// // Define at the top of the spec file or just import it
// function terminalLog(violations) {
//   cy.task(
//     'log',
//     `${violations.length} accessibility violation${
//       violations.length === 1 ? '' : 's'
//     } ${violations.length === 1 ? 'was' : 'were'} detected`
//   )
//   // pluck specific keys to keep the table readable
//   const violationData = violations.map(
//     ({ id, impact, description, nodes }) => ({
//       id,
//       impact,
//       description,
//       nodes: nodes.length
//     })
//   )

//   cy.task('table', violationData)
// }

// // Then in your test...
// it('Logs violations to the terminal', () => {
//   cy.checkA11y(null, null, terminalLog)
// })

describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.injectAxe()
    cy.checkA11y()
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

  it('should fill-in the form, submit data and display the modal', () => {
    const pickupLocation = 'Warsaw'
    const dropOffLocation = 'Krakow'
    const dateFrom = '2023-12-01'
    const pickupTime = '10:00'
    const dateTo = '2023-12-10'
    const dropOffTime = '11:00'
    const isOver25 = 'Yes'
    const discountCode = 'A1B2B3'

    cy.get('#submittedDetailsModal').should('not.be.visible')

    cy.findByLabelText('Pickup Location').should('be.visible').type(pickupLocation)
    cy.findByLabelText('Drop-off Location').type(dropOffLocation)
    cy.findByLabelText('Date From').type(dateFrom)
    cy.findByLabelText('Pick-up Time').select(pickupTime)
    cy.findByLabelText('Date To').type(dateTo)
    cy.findByLabelText('Drop-off Time').select(dropOffTime)
    cy.findByLabelText('Is driver over 25 years old?').check()

    cy.findByPlaceholderText('Discount Code').should('not.be.visible')
    cy.findByLabelText('I have discount code').check()
    cy.findByPlaceholderText('Discount Code').should('be.visible').type(discountCode)

    cy.get('#bookingReservation')
      .findByRole('button', {name: /Find Cars/i})
      .should('exist')

    cy.get('#bookingReservation').submit()

    cy.get('#submittedDetailsModal').should('be.visible')
    cy.get('#submittedDetailsModal').within(() => {
      cy.contains(pickupLocation)
      cy.contains(dropOffLocation)
      cy.contains(dateFrom)
      cy.contains(pickupTime)
      cy.contains(dateTo)
      cy.contains(dropOffTime)
      cy.contains(isOver25)
      cy.contains(discountCode)
    })
  })

  it('should fill-in the form, submit data and not display the modal if there is a field missing', () => {
    const pickupLocation = 'Warsaw'
    const dateFrom = '2023-12-01'
    const pickupTime = '10:00'
    const dateTo = '2023-12-10'
    const dropOffTime = '11:00'
    const discountCode = 'A1B2B3'

    cy.get('#submittedDetailsModal').should('not.be.visible')

    cy.findByLabelText('Pickup Location').should('be.visible').type(pickupLocation)
    cy.findByLabelText('Date From').type(dateFrom)
    cy.findByLabelText('Pick-up Time').select(pickupTime)
    cy.findByLabelText('Date To').type(dateTo)
    cy.findByLabelText('Drop-off Time').select(dropOffTime)
    cy.findByLabelText('Is driver over 25 years old?').check()

    cy.findByPlaceholderText('Discount Code').should('not.be.visible')
    cy.findByLabelText('I have discount code').check()
    cy.findByPlaceholderText('Discount Code').should('be.visible').type(discountCode)

    cy.get('#bookingReservation')
      .findByRole('button', {name: /Find Cars/i})
      .should('exist')

    cy.get('#bookingReservation').submit()

    cy.get('#submittedDetailsModal').should('not.be.visible')
  })

  // Basic usage
  // it('Has no detectable a11y violations on load', () => {
  //   // Test the page at initial load
  //   cy.visit('/')
  //   cy.injectAxe()
  //   cy.checkA11y()
  // })

})
