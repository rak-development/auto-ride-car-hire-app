const template = styles => {
  return `
    <div class='${styles['social-icons']} d-flex justify-content-end align-items-center'>
      <div class='${styles['social-icons__el']}'>
        <a href='' target='_blank'>
          <i class='${styles['social-icons__icon']} fa-brands fa-facebook-f'></i>
        </a>
      </div>
      <div class='${styles['social-icons__el']} me-0'>
        <a href='' target='_blank'>
          <i class='${styles['social-icons__icon']} fa-brands fa-twitter'></i>
        </a>
      </div>
    </div>
  `
}
export default template
