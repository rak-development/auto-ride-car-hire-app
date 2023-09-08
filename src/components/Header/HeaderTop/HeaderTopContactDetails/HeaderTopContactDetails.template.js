const template = styles => {
  return `
    <div class='container'>
      <div class='${styles['header-top__contact-details']} d-md-flex justify-content-md-between'>
        <div class='${styles['header-top__contact-details__el']}'>
          <i class='${styles['header-top__contact-details__icon']} fa-solid fa-location-dot'></i>
          Jasionka 942, 36-002 Jasionka
        </div>
        <div class='${styles['header-top__contact-details__el']}'>
          <i class='${styles['header-top__contact-details__icon']} fa-solid fa-mobile-screen-button'></i>
          123 456 789
        </div>
        <div class='${styles['header-top__contact-details__el']}'>
          <i class='${styles['header-top__contact-details__icon']} fa-regular fa-clock'></i>
          24/7
        </div>
      </div>
    </div>
  `
}
export default template
