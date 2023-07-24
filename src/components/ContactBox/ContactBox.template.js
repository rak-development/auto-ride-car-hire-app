const template = styles => {
  return `
    <div class='row'>
      <div class='col-md-4'>
        <div class='${styles['contact-box']} d-flex'>
          <div class='${styles['contact-box__icon-container']}'>
            <i class="fa-regular fa-clock ${styles['contact-box__icon']}"></i>
            <span></span>
          </div>
          <div class='${styles['contact-box__content']}'>
            <div class='${styles['contact-box__title']}'>ADDRESS</div>
            <div class='${styles['contact-box__text']}'>Jasionka 942, <br />36-002 Jasionka</div>
          </div>
        </div>
      </div>
      <div class='col-md-4'>
        <div class='${styles['contact-box']} d-flex'>
          <div class='${styles['contact-box__icon-container']}'>
            <i class="fa-regular fa-clock ${styles['contact-box__icon']}"></i>
            <span></span>
          </div>
          <div class='${styles['contact-box__content']}'>
            <div class='${styles['contact-box__title']}'>PHONES</div>
            <div class='${styles['contact-box__text']}'>
              BOOK A RIDE: 123 456 789 <br />OFFICE: (+48) 17 123 45 61
            </div>
          </div>
        </div>
      </div>
      <div class='col-md-4'>
        <div class='${styles['contact-box']} d-flex'>
          <div class='${styles['contact-box__icon-container']}'>
            <i class="fa-regular fa-clock ${styles['contact-box__icon']}"></i>
            <span></span>
          </div>
          <div class='${styles['contact-box__content']}'>
            <div class='${styles['contact-box__title']}'>WORKING HOURS</div>
            <div class='${styles['contact-box__text']}'>24/7</div>
          </div>
        </div>
      </div>
    </div>
  `
}
export default template
