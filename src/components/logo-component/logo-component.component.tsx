import { Logo } from './logo-component.styles'

import logoSrc from '/src/assets/images/AutoRide-Logo.png'

export const LogoComponent: React.FC = () => {
  return (
    <>
      <Logo id='logo' src={logoSrc} alt='AutoRide-Logo' />
    </>
  )
}
