const template = (styles, socialIcons) => {
  return `
    <div class='${styles['footer-bottom__wrapper']}'>
      <div class='container'>
        <div class='row align-items-center'>
          <div class='col-md-6'>Copyright 2023 AutoRide by Rafal Krohne</div>
          <div class='col-md-6'>
            ${socialIcons.outerHTML}
          </div>
        </div>
      </div>
    </div>
  `
}
export default template
