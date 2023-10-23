import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import LogoComponent from '../../logo-component/logo-component.component';

import { NavItem, NavToggler } from './header-middle.styles';

const HeaderTopContactDetails: React.FC = () => {
  return (
    <>
      <Navbar expand='xl' className='navbar bg-white py-0'>
        <Container>
          <Navbar.Brand className='py-0 me-0 d-block' href='#'>
            <LogoComponent />
          </Navbar.Brand>
          <NavToggler 
            className='rounded-circle p-0' 
            type='button' 
            data-bs-toggle='collapse' 
            data-bs-target='#navbarNav' 
            aria-controls='navbarNav' 
            aria-expanded='false' 
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </NavToggler>
          <Navbar.Collapse id='navbarNav' className='justify-content-end' >
            <Nav>
              <NavItem className='active' aria-current='page' href='#'>Home</NavItem>
              <NavItem href='#'>Our Fleet</NavItem>
              <NavItem href='#'>Service Rates</NavItem>
              <NavItem href='#'>News</NavItem>
              <NavItem href='#'>About Us</NavItem>
              <NavItem href='#'>Contact Us</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default HeaderTopContactDetails;
