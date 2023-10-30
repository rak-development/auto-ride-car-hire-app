import styled from '@emotion/styled';

import logoSrc from '/src/assets/images/AutoRide-Footer-Logo.png';


const Logo = styled.img`
  margin-top: 1.875rem;
  margin-bottom: 1.875rem;
  height: auto;
  display: block;
  max-width: 100%;
`;


export const LogoGrey = () => <Logo id='logo' src={logoSrc} alt='AutoRide-Logo' />
