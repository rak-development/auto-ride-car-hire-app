const template = styles => {
  return `
    <div class='${styles['header-bottom__wrapper']}'>
      <div class='container'>
        <h5 class='mb-0 text-white' role='heading' aria-label='Subheader'>
          BOOK SMART. BOOK EARLY
        </h5>
        <h1 class='mb-0 mt-3 text-white' role='heading' aria-label='Main Header'>
          Better journeys, by AutoRide
        </h1>
        <h2 class='mb-5 text-white' role='heading' aria-label='Second Header'>
          Make the most of your car hire
        </h2>
        <booking-reservation></booking-reservation>
      </div>
    </div>
  `
}
export default template

