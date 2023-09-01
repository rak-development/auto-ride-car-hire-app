import logo from '/src/assets/images/AutoRide-Logo.png'

const template = styles => {
  return `
    <div class='container d-flex justify-content-between'>
      <div>
        <a class='${styles['header-middle__logo-container']}' href='#'>
          <img src='${logo}' id='logo' class='${styles['header-middle__logo']}' alt='AutoRide-Logo' />
        </a>
      </div>
      <ul class='${styles['header-middle__nav']} d-flex align-items-center'>
        <li class='${styles['header-middle__nav-item']}'>
          <a class='${styles['header-middle__nav-link']}' href='#'>Home</a>
        </li>
        <li class='${styles['header-middle__nav-item']}'>
          <a class='${styles['header-middle__nav-link']}' href='#'>Our Fleet</a>
        </li>
        <li class='${styles['header-middle__nav-item']}'>
          <a class='${styles['header-middle__nav-link']}' href='#'>Service Rates</a>
        </li>  
        <li class='${styles['header-middle__nav-item']}'>
          <a class='${styles['header-middle__nav-link']}' href='#'>News</a>
        </li>
        <li class='${styles['header-middle__nav-item']}'>
          <a class='${styles['header-middle__nav-link']}' href='#'>About Us</a>
        </li>
        <li class='${styles['header-middle__nav-item']}'>
          <a class='${styles['header-middle__nav-link']}' href='#'>Contact Us</a>
        </li>
      </ul>
    </div>
  `
}
export default template
