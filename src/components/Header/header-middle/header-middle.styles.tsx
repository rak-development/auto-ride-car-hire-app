import styled from '@emotion/styled'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const StyledNavItem = styled.a`
  text-transform: uppercase;
  line-height: 1.66rem;
  color: var(--bs-gray-700);
  font-size: 1rem;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  text-decoration: none;

  &:last-child {
    padding-right: 0 !important;
  }
`

const StyledNavToggler = styled.button`
  width: 2.875rem;
  height: 2.875rem;
  border-width: 0.125rem;
  border-color: var(--bs-gray-200);

  &:focus {
    box-shadow: none;
  }
`;

export const NavItem = StyledNavItem.withComponent(Nav.Link)
export const NavToggler = StyledNavToggler.withComponent(Navbar.Toggle)
