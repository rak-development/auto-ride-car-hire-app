import { Modal } from 'bootstrap'

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
const checkboxInputs = form.querySelectorAll("input[type='checkbox']");

for (const checkboxInout of checkboxInputs) {
  checkboxInout.addEventListener('change', event => {
    const { checked, id, form } = event.target
    event.target.value = checked ? true : false

    if (id === 'discountCodeCheck') {
      const discountCodeWrapper = form.querySelector('#discountCode').closest('.question-col')
      discountCodeWrapper.classList.toggle('d-none')
    }
  });
}

form.addEventListener('submit', event => {
  event.preventDefault()
  event.stopPropagation()

  if (form.checkValidity()) {
    buildModalContent(event)
  }
  form.classList.add('was-validated')
})

const buildModalContent = () => {
  const formData = new FormData(event.target);

  const modal = new Modal(document.getElementById('submittedDetailsModal'), {})
  const modalBody = modal._element.querySelector('.modal-body .container-fluid')
  modalBody.innerHTML = ''

  const isOver25Selected = formData.get("over25") === 'true'
  const isDiscountCodeSelected = formData.get("over25") === 'true'


  const locationInfoRow = document.createElement("div");
  locationInfoRow.classList.add('row')

  const locationInfoColLeft = document.createElement("div");
  locationInfoColLeft.classList.add('col-md-6')
  locationInfoColLeft.innerHTML = 'Pickup Location:'

  const locationInfoColRight = document.createElement("div");
  locationInfoColRight.classList.add('col-md-6')
  locationInfoColRight.innerHTML = formData.get("pickupLocation")

  locationInfoRow.append(locationInfoColLeft, locationInfoColRight)
  modalBody.appendChild(locationInfoRow)

  const differentLocationInfoRow = document.createElement("div");
  differentLocationInfoRow.classList.add('row')

  const differentLocationInfoColLeft = document.createElement("div");
  differentLocationInfoColLeft.classList.add('col-md-6')
  differentLocationInfoColLeft.innerHTML = 'Drop-off Location:';

  const differentLocationInfoColRight = document.createElement("div");
  differentLocationInfoColRight.classList.add('col-md-6')
  differentLocationInfoColRight.innerHTML = formData.get("dropOffLocation")

  differentLocationInfoRow.append(differentLocationInfoColLeft, differentLocationInfoColRight)
  modalBody.appendChild(differentLocationInfoRow)
  
  const dateFromRow = document.createElement("div");
  dateFromRow.classList.add('row')

  const dateFromColLeft = document.createElement("div");
  dateFromColLeft.classList.add('col-md-6')
  dateFromColLeft.innerHTML = 'Date From:'

  const dateFromColRight = document.createElement("div");
  dateFromColRight.classList.add('col-md-6')
  dateFromColRight.innerHTML = `${formData.get("pickupDate")} / ${formData.get("pickupTime")}`

  dateFromRow.append(dateFromColLeft, dateFromColRight)
  modalBody.appendChild(dateFromRow)

  const dateToRow = document.createElement("div");
  dateToRow.classList.add('row')

  const dateToColLeft = document.createElement("div");
  dateToColLeft.classList.add('col-md-6')
  dateToColLeft.innerHTML = 'Date To:'

  const dateToColRight = document.createElement("div");
  dateToColRight.classList.add('col-md-6')
  dateToColRight.innerHTML = `${formData.get("dropOffDate")} / ${formData.get("dropOffTime")}`

  dateToRow.append(dateToColLeft, dateToColRight)
  modalBody.appendChild(dateToRow)

  const ageCheckRow = document.createElement("div");
  ageCheckRow.classList.add('row')

  const ageCheckColLeft = document.createElement("div");
  ageCheckColLeft.classList.add('col-md-6')
  ageCheckColLeft.innerHTML = 'Is driver over 25 years old?:'

  const ageCheckColRight = document.createElement("div");
  ageCheckColRight.classList.add('col-md-6')
  ageCheckColRight.innerHTML = isOver25Selected ? 'Yes' : 'No'

  ageCheckRow.append(ageCheckColLeft, ageCheckColRight)
  modalBody.appendChild(ageCheckRow)

  const discountCodeRow = document.createElement("div");
  discountCodeRow.classList.add('row')

  const discountCodeColLeft = document.createElement("div");
  discountCodeColLeft.classList.add('col-md-6')
  discountCodeColLeft.innerHTML = 'Discount Code:'

  const discountCodeColRight = document.createElement("div");
  discountCodeColRight.classList.add('col-md-6')
  discountCodeColRight.innerHTML = isDiscountCodeSelected ? formData.get("discountCode") : ''

  discountCodeRow.append(discountCodeColLeft, discountCodeColRight)
  modalBody.appendChild(discountCodeRow)

  modal.show();
}
