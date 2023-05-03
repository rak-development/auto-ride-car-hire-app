const template = styles => {
  return `
    <div class='${styles['header-top__social']} d-flex justify-content-between align-items-center'>
      <div class="${styles['header-top__social__el']}"><a href="" target="_blank"><i class="${styles['header-top__social__icon']} fa-brands fa-facebook-f"></i></a></div>
      <div class="${styles['header-top__social__el']} me-0"><a href="" target="_blank"><i class="${styles['header-top__social__icon']} fa-brands fa-twitter"></i></a></div>
    </div>
  `
}
export default template
