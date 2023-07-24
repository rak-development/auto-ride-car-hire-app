const template = styles => {
  return `
    <div class='${styles['footer-top']}'>
      <div class='container'>
        <div class='row'>
          <div class='col-md-4'>
            <div class='footer-contact-box d-flex'>
              <div class='${styles['footer-contact-box__icon']}'>
                <span></span>
              </div>
              <div class='footer-contact-box__content'>
                <div class='${styles['footer-contact-box__title']}'>ADDRESS</div>
                <div class='${styles['footer-contact-box__text']}'>2507 PARKER BOULEVARD OAKLAND, CA 76107</div>
              </div>
            </div>
          </div>
          <div class='col-md-4'>
            <div class='footer-contact-box d-flex'>
              <div class='${styles['footer-contact-box__icon']}'>
                <span></span>
              </div>
              <div class='footer-contact-box__content'>
                <div class='${styles['footer-contact-box__title']}'>PHONES</div>
                <div class='${styles['footer-contact-box__text']}'>
                  BOOK A RIDE: (0481) 123 987 2411 <br />OFFICE: (0481) 123 987 2412
                </div>
              </div>
            </div>
          </div>
          <div class='col-md-4'>
            <div class='footer-contact-box d-flex'>
              <div class='${styles['footer-contact-box__icon']}'>
                <span></span>
              </div>
              <div class='footer-contact-box__content'>
                <div class='${styles['footer-contact-box__title']}'>WORKING HOURS</div>
                <div class='${styles['footer-contact-box__text']}'>MON-SAT: 07:00 - 17:00 <br />SUN: CLOSED</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}
export default template
