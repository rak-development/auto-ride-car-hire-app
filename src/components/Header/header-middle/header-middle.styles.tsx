import styled from 'styled-components';
import { device } from '../../../devices-breakpoints';

export const Logo = styled.img`
  max-width: 14.6875rem;
  max-height: 6.875rem;
`;

export const Nav = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const NavItem = styled.li`
  padding: 0 1.4063rem;

  &:last-child {
    padding-right: 0;
  }

  @media ${device.xl} { 
    padding-right: 0.9375rem;
  }
`;

export const NavItemLink = styled.a`
  text-transform: uppercase;
  line-height: 1.66rem;
  color: var(--bs-gray-700);
  font-size: 1rem;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  text-decoration: none;
`;

export const NavToggler = styled.button`
  width: 2.875rem;
  height: 2.875rem;
  border-width: 0.125rem;
  border-color: var(--bs-gray-200);

  &:focus {
    box-shadow: none;
  }
`;
