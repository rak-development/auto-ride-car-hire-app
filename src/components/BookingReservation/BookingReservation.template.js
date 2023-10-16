(() => {
  'use strict'
  setTimeout(() => {
    const differentLocation = document.querySelector('#differentLocation');
    differentLocation.addEventListener('change', event => {
      console.log(event, ' change')
    });

    const form = document.querySelector('#bookingReservation')
    form.addEventListener('submit', event => {
      console.log('submit: ', event)
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  }, 2000)
})()

const template = styles => {
  return `
    <div class='${styles['booking-reservation__wrapper']}'>
      <form 
        id='bookingReservation' 
        class='${styles['booking-reservation__form']} bg-white needs-validation' 
        novalidate>
        <div class='container'>
          <div class='row'>
            <div class='col-md-6 p-0'>
              <div class='${styles['booking-reservation__box']}'>
                <label for='pickupLocation' class='form-label ${styles['booking-reservation__label']}'>
                  Pickup Location
                </label>
                <div class='input-group has-validation'>
                  <input type='text' class='form-control' id='pickupLocation' required>
                  <div class="valid-feedback">
                    Looks good!
                  </div>
                  <div class='invalid-feedback'>
                    Please enter pickup location.
                  </div>
                </div>
              </div>
            </div>
            <div class='col-md-6 p-0'>
              <div class='${styles['booking-reservation__box']}'>
                <label for='dropOffLocation' class='form-label ${styles['booking-reservation__label']}'>
                  Drop-off Location
                </label>
                <div class='input-group has-validation'>
                  <input type='text' class='form-control' id='dropOffLocation' required>
                  <div class="valid-feedback">
                    Looks good!
                  </div>
                  <div class='invalid-feedback'>
                    Please enter drop-off location.
                  </div>
                </div>
              </div>
            </div>
            <div class='col-md-6 col-lg-3 p-0'>
              <div class='${styles['booking-reservation__box']}'>
                <label for='pickupDate' class='form-label ${styles['booking-reservation__label']}'>Date From</label>
                <div class='input-group has-validation'>
                  <input type='date' class='form-control' id='pickupDate' required>
                  <div class="valid-feedback">
                    Looks good!
                  </div>
                  <div class='invalid-feedback'>
                    Please enter pickup date.
                  </div>
                </div>
              </div>
            </div>
            <div class='col-md-6 col-lg-3 p-0'>
              <div class='${styles['booking-reservation__box']}'>
                <div class='input-group has-validation'>
                  <select class='form-select' name='pickupTime' id='pickupTime'>
                    <option value='9:00'>9:00</option>
                    <option value='10:00'>10:00</option>
                    <option value='11:00'>11:00</option>
                    <option value='12:00'>12:00</option>
                  </select>
                  <div class="valid-feedback">
                    Looks good!
                  </div>
                </div>
              </div>
            </div>
            <div class='col-md-6 col-lg-3 p-0'>
              <div class='${styles['booking-reservation__box']}'>
                <label for='dropOffDate' class='form-label ${styles['booking-reservation__label']}'>Date To</label>
                <div class='input-group has-validation'>
                  <input type='date' class='form-control' id='dropOffDate' required>
                  <div class="valid-feedback">
                    Looks good!
                  </div>
                  <div class='invalid-feedback'>
                    Please enter drop-off date.
                  </div>
                </div>
              </div>
            </div>
            <div class='col-md-6 col-lg-3 p-0'>
              <div class='${styles['booking-reservation__box']} border-end-0'>
                <div class='input-group has-validation'>
                  <select class='form-select' name='dropOffTime' id='dropOffTime'>
                    <option value='9:00'>9:00</option>
                    <option value='10:00'>10:00</option>
                    <option value='11:00'>11:00</option>
                    <option value='12:00'>12:00</option>
                  </select>
                  <div class="valid-feedback">
                    Looks good!
                  </div>
                </div>
              </div>
            </div>
            <div class='col-md-4 p-0'>
              <div class='${styles['booking-reservation__box']}'>
                <div class='form-check mb-0'>
                  <input class='form-check-input' type='checkbox' value='' id='differentLocation'>
                  <label class='form-check-label' for='differentLocation'>
                    Pick different drop off location
                  </label>
                </div>
              </div>
            </div>
            <div class='col-md-4 p-0'>
              <div class='${styles['booking-reservation__box']}'>
                <div class='form-check mb-0'>
                  <input class='form-check-input' type='checkbox' value='' id='over25'>
                  <label class='form-check-label' for='over25'>
                    Is driver over 25 years old?
                  </label>
                </div>
              </div>
            </div>
            <div class='col-md-4 p-0'>
              <div class='${styles['booking-reservation__box']}'>
                <div class='form-check mb-0'>
                  <input class='form-check-input' type='checkbox' value='' id='discountCodeCheck'>
                  <label class='form-check-label' for='discountCodeCheck'>
                    I have discount code
                  </label>
                  <div class='booking-reservation__discount-wrapper d-none'>
                    <input type='text' placeholder='Discount Code' class='form-control' id='discountCode'>
                  </div>
                </div>
              </div>
            </div>
            <div class='col p-0'>
              <div class='${styles['booking-reservation__box']} border-0'>
                <button 
                  type='submit' 
                  class='btn btn-primary text-uppercase ${styles['booking-reservation__submit']}'
                >Find Cars</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  `
}
export default template
