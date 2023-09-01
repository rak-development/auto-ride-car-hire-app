const template = styles => {
  return `
    <div class='${styles['booking-reservation__wrapper']}'>
      <form class='${styles['booking-reservation__form']} bg-white'>
        <div class='container'>
          <div class='row'>
            <div class='col-3 p-0'>
              <div class='${styles['booking-reservation__box']}'>
                <label for='pickupLocation' class='form-label ${styles['booking-reservation__label']}'>
                  Pickup Location
                </label>
                <input type='text' class='form-control' id='pickupLocation'>
              </div>
            </div>
            <div class='col-3 p-0'>
              <div class='${styles['booking-reservation__box']}'>
                <label for='dropOffLocation' class='form-label ${styles['booking-reservation__label']}'>
                  Drop-off Location
                </label>
                <input type='text' class='form-control' id='dropOffLocation'>
              </div>
            </div>
            <div class='col-2 p-0'>
              <div class='${styles['booking-reservation__box']}'>
                <label for='pickupDate' class='form-label ${styles['booking-reservation__label']}'>Date From</label>
                <input type='date' class='form-control' id='pickupDate'>
              </div>
            </div>
            <div class='col-1 p-0'>
              <div class='${styles['booking-reservation__box']}'>
                <select name='pickupTime' id='pickupTime'>
                  <option value='9:00'>9:00</option>
                  <option value='10:00'>10:00</option>
                  <option value='11:00'>11:00</option>
                  <option value='12:00'>12:00</option>
                </select>
              </div>
            </div>
            <div class='col-2 p-0'>
              <div class='${styles['booking-reservation__box']}'>
                <label for='dropOffDate' class='form-label ${styles['booking-reservation__label']}'>Date To</label>
                <input type='date' class='form-control' id='dropOffDate'>
              </div>
            </div>
            <div class='col-1 p-0'>
              <div class='${styles['booking-reservation__box']} border-end-0'>
                <select name='dropOffTime' id='dropOffTime'>
                  <option value='9:00'>9:00</option>
                  <option value='10:00'>10:00</option>
                  <option value='11:00'>11:00</option>
                  <option value='12:00'>12:00</option>
                </select>
              </div>
            </div>
            <div class='col-4 p-0'>
              <div class='${styles['booking-reservation__box']}'>
                <div class='form-check mb-0'>
                  <input class='form-check-input' type='checkbox' value='' id='differentLocation'>
                  <label class='form-check-label' for='differentLocation'>
                    Pick different drop off location
                  </label>
                </div>
              </div>
            </div>
            <div class='col-4 p-0'>
              <div class='${styles['booking-reservation__box']}'>
                <div class='form-check mb-0'>
                  <input class='form-check-input' type='checkbox' value='' id='over25'>
                  <label class='form-check-label' for='over25'>
                    Is driver over 25 years old?
                  </label>
                </div>
              </div>
            </div>
            <div class='col-4 p-0'>
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
            <div class='col-2 p-0'>
              <div class='${styles['booking-reservation__box']} border-0'>
                <button type='submit' class='btn btn-primary text-white text-uppercase'>Find Cars</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  `
}
export default template
