import { Logo, NavToggler, Nav, NavItem, NavItemLink } from "./header-middle.styles";

import logoSrc from '/src/assets/images/AutoRide-Logo.png'

const HeaderTopContactDetails: React.FC = () => {
  return (
    <>
      <nav className='navbar navbar-expand-xl bg-white py-0'>
        <div className='container'>
          <a className='navbar-brand py-0 me-0 d-block' href='#' title='Homepage'>
            <Logo id='logo' src={logoSrc} alt='AutoRide-Logo' />
          </a>
          <NavToggler 
            className='navbar-toggler rounded-circle p-0' 
            type='button' 
            data-bs-toggle='collapse' 
            data-bs-target='#navbarNav' 
            aria-controls='navbarNav' 
            aria-expanded='false' 
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </NavToggler>
          <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
            <Nav className='navbar-nav'>
              <NavItem className='nav-item'>
                <NavItemLink className='nav-link active p-0' aria-current='page' href='#'>Home</NavItemLink>
              </NavItem>
              <NavItem className='nav-item'>
                <NavItemLink className='nav-link p-0' href='#'>Our Fleet</NavItemLink>
              </NavItem>
              <NavItem className='nav-item'>
                <NavItemLink className='nav-link p-0' href='#'>Service Rates</NavItemLink>
              </NavItem>  
              <NavItem className='nav-item'>
                <NavItemLink className='nav-link p-0' href='#'>News</NavItemLink>
              </NavItem>
              <NavItem className='nav-item'>
                <NavItemLink className='nav-link p-0' href='#'>About Us</NavItemLink>
              </NavItem>
              <NavItem className='nav-item'>
                <NavItemLink className='nav-link p-0' href='#'>Contact Us</NavItemLink>
              </NavItem>
            </Nav>
          </div>
        </div>
      </nav>
    </>
  )
}

export default HeaderTopContactDetails;
