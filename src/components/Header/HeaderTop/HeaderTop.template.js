const template = styles => {
  return `
    <div class='header-top bg-light'>
      <div class='${styles['header-top__container']} container d-flex justify-content-between align-items-center'>
        <header-top-contact-details></header-top-contact-details>
        <social-icons></social-icons>
      </div>
    </div>
  `
}
export default template
