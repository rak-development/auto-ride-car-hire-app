const template = styles => {
  return `
    <div class='header-top bg-light'>
      <div class='
        ${styles['header-top__container']} 
        container 
        d-md-flex 
        justify-content-md-between 
        align-items-md-center
      '>
        <header-top-contact-details></header-top-contact-details>
        <social-icons></social-icons>
      </div>
    </div>
  `
}
export default template
