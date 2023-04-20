const template = (styles) => {
  return `
    <div class='${styles['header-top__contact-details']} d-flex justify-content-between'>
      <div class="${styles['header-top__contact-details__el']}"><i class="${styles['header-top__contact-details__icon']} fa-solid fa-location-dot"></i>Jasionka 942, 36-002 Jasionka</div>
      <div class="${styles['header-top__contact-details__el']}"><i class="${styles['header-top__contact-details__icon']} fa-solid fa-mobile-screen-button"></i>660 505 474</div>
      <div class="${styles['header-top__contact-details__el']}"><i class="${styles['header-top__contact-details__icon']} fa-regular fa-clock"></i>24/7</div>
    </div>
  `
}
export default template
