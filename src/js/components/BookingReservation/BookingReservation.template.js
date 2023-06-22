const template = () => {
  return `
    <div class='booking-reservation-wrapper'>
      <form class="booking-reservation bg-white">
        <div class="col-12">
          <label for="pickupLocation" class="form-label">Pickup Location</label>
          <input type="date" class="form-control" id="pickupLocation">
        </div>
        <div class="col-12">
          <label for="dropOffLocation" class="form-label">Drop-off Location</label>
          <input type="text" class="form-control" id="dropOffLocation">
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="promoCodeCheck">
            <label class="form-check-label" for="promoCodeCheck">
              Pick different drop off location
            </label>
          </div>
        </div>
        <div class='col-12'>
          <div class='row'>
            <div class='col-6'>
              <div class='row'>
                <div class="col-6">
                  <label for="pickupDate" class="form-label">Pickup Date</label>
                  <input type="date" class="form-control" id="pickupDate">
                </div>
                <div class="col-6">
                  <label for="pickupTime" class="form-label">Pickup Time</label>
                  <input type="text" class="form-control" id="pickupTime">
                </div>
              </div>
            </div>
            <div class='col-6'>
              <div class='row'>
                <div class="col-6">
                  <label for="dropOffDate" class="form-label">Drop-off Date</label>
                  <input type="text" class="form-control" id="dropOffDate">
                </div>
                <div class="col-6">
                  <label for="dropOffTime" class="form-label">Drop-off Time</label>
                  <input type="text" class="form-control" id="dropOffTime">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='col-12'>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="over25">
            <label class="form-check-label" for="over25">
              Is driver over 25 years old?
            </label>
          </div>
        </div>
        <div class='col-12'>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="promoCodeCheck">
            <label class="form-check-label" for="promoCodeCheck">
              I have promo code
            </label>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Find Car</button>
        </div>
      </form>
    </div>
  `
}
export default template
