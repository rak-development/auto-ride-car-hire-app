const template = (headerTopSocial, headerTopContactDetails, styles) => {
  return `
    <div class='${styles['header-top__container']} container d-flex justify-content-between align-items-center'>
      ${headerTopContactDetails.outerHTML}
      ${headerTopSocial.outerHTML}
    </div>
  `
}
export default template
