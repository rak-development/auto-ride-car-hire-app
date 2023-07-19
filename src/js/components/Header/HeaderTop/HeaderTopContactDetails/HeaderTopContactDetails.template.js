const template = () => {
  return `
    <style>
        .header-top__contact-details {
          color: #778591;
          font-size: 15px;
        }
        
        .header-top__contact-details__el {
          padding-right: 15px;
          margin-right: 25px;
        }
        
        .header-top__contact-details__icon {
          font-size: 16px;
          padding-right: 15px;
        }
      </style>

      <div class='header-top__contact-details d-flex justify-content-between'>
        <div class='header-top__contact-details__el'>
          <i class='header-top__contact-details__icon fa-solid fa-location-dot'></i>
          Jasionka 942, 36-002 Jasionka
        </div>
        <div class='header-top__contact-details__el'>
          <i class='header-top__contact-details__icon fa-solid fa-mobile-screen-button'></i>
          660 505 474
        </div>
        <div class='header-top__contact-details__el'>
          <i class='header-top__contact-details__icon fa-regular fa-clock'></i>
          24/7
        </div>
      </div>
  `
}
export default template
