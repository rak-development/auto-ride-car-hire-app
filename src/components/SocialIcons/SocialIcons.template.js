const template = styles => {
  return `
    <div class='
      ${styles['social-icons']} 
      d-flex 
      justify-content-start 
      justify-content-md-end align-items-center
    '>
      <div class='${styles['social-icons__el']}'>
        <a href='https://www.facebook.com/' target='_blank' aria-label="Facebook Link">
          <i class='${styles['social-icons__icon']} fa-brands fa-facebook-f'></i>
        </a>
      </div>
      <div class='${styles['social-icons__el']} me-0'>
        <a href='https://twitter.com/' target='_blank' aria-label="Twitter Link">
          <i class='${styles['social-icons__icon']} fa-brands fa-twitter'></i>
        </a>
      </div>
    </div>
  `
}
export default template
