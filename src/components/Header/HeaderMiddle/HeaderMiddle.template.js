import logo from '/src/assets/images/AutoRide-Logo.png'

const template = (styles) => {
  return `
    <nav class='navbar navbar-expand-xl bg-white py-0'>
      <div class='container'>
        <a class='navbar-brand py-0 me-0 d-block' href='#'>
          <img 
            src='${logo}' 
            id='logo' 
            class='${styles['header-middle__logo']}' 
            alt='AutoRide-Logo' />
        </a>
        <button 
          class='navbar-toggler ${styles['header-middle__nav-toggler']} rounded-circle p-0' 
          type='button' 
          data-bs-toggle='collapse' 
          data-bs-target='#navbarNav' 
          aria-controls='navbarNav' 
          aria-expanded='false' 
          aria-label='Toggle navigation'>
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse justify-content-end' id='navbarNav'>
          <ul class='navbar-nav ${styles['header-middle__nav']}'>
            <li class='nav-item ${styles['header-middle__nav-item']}'>
              <a class='nav-link active ${styles['header-middle__nav-link']} p-0' aria-current='page' href='#'>Home</a>
            </li>
            <li class='nav-item ${styles['header-middle__nav-item']}'>
              <a class='nav-link ${styles['header-middle__nav-link']} p-0' href='#'>Our Fleet</a>
            </li>
            <li class='nav-item ${styles['header-middle__nav-item']}'>
              <a class='nav-link ${styles['header-middle__nav-link']} p-0' href='#'>Service Rates</a>
            </li>  
            <li class='nav-item ${styles['header-middle__nav-item']}'>
              <a class='nav-link ${styles['header-middle__nav-link']} p-0' href='#'>News</a>
            </li>
            <li class='nav-item ${styles['header-middle__nav-item']}'>
              <a class='nav-link ${styles['header-middle__nav-link']} p-0' href='#'>About Us</a>
            </li>
            <li class='nav-item ${styles['header-middle__nav-item']}'>
              <a class='nav-link ${styles['header-middle__nav-link']} p-0' href='#'>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `
}
export default template
