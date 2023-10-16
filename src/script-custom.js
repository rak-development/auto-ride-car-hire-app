// Scroll to top functionality
const scrollToTopButton = document.getElementById('scroll-to-top')

window.addEventListener('scroll', () => {
  if (window.scrollY > 3000) {
    scrollToTopButton.classList.add('d-flex')
  } else {
    scrollToTopButton.classList.remove('d-flex')
  }
})

scrollToTopButton.addEventListener('click', () => {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
})

// Booking Reservation functionality

const form = document.querySelector('#bookingReservation')
const pickupLocationLabel = form.querySelector('label[for="pickupLocation"]')
const dropOffLocationLabel = form.querySelector('label[for="dropOffLocation"]')
const differentLocationInput = form.querySelector('#differentLocation')
const discountCodeCheckInput = form.querySelector('#discountCodeCheck')
const discountCodeInput = form.querySelector('#discountCode')

differentLocationInput.addEventListener('change', event => {
  const questionColPickup = pickupLocationLabel.closest('.question-col')
  const questionColDropOff = dropOffLocationLabel.closest('.question-col')
  const questionColClasses = questionColPickup.classList

  questionColClasses.toggle('col-12')
  questionColClasses.toggle('col-md-6')
  questionColDropOff.classList.toggle('d-none')
  pickupLocationLabel.innerHTML = event.target.checked ? 'Pickup Location' : 'Pickup/Drop-off Location' 
})

discountCodeCheckInput.addEventListener('change', () => {
  const discountCodeWrapper = discountCodeInput.closest('.question-col')
  discountCodeWrapper.classList.toggle('d-none')
})

form.addEventListener('submit', event => {
  console.log('submit: ', event)

  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }

  form.classList.add('was-validated')
})
