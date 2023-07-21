const template = styles => {
  return `
    <div class='${styles['header-bottom__wrapper']}'>
      <div class='container'>
        <h5 class='${styles['header-bottom__subheader']} mb-0'>BOOK SMART. BOOK EARLY</h5>
        <h1 class='${styles['header-bottom__header']} mb-0'>Better journeys, by AutoRide</h1>
        <h2 class='${styles['header-bottom__header']} mb-5'>Make the most of your car hire</h2>
        <booking-reservation></booking-reservation>
      </div>
    </div>
  `
}
export default template
