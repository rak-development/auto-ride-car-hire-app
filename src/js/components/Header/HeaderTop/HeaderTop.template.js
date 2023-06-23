const template = (socialIcons, headerTopContactDetails, styles) => {
  return `
    <div class='${styles['header-top__container']} container d-flex justify-content-between align-items-center'>
      ${headerTopContactDetails.outerHTML}
      ${socialIcons.outerHTML}
    </div>
  `
}
export default template
