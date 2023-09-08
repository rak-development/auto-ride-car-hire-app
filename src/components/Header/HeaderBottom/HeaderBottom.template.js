const template = styles => {
  return `
    <div class='${styles['header-bottom__wrapper']}'>
      <div class='container'>
        <h5 class='mb-0 text-white'>BOOK SMART. BOOK EARLY</h5>
        <h1 class='mb-0 mt-3 text-white'>Better journeys, by AutoRide</h1>
        <h2 class='mb-5 text-white'>Make the most of your car hire</h2>
        <booking-reservation></booking-reservation>
      </div>
    </div>
  `
}
export default template
