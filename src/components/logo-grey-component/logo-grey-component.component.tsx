import { Logo } from './logo-grey-component.styles'

import logoSrc from '/src/assets/images/AutoRide-Footer-Logo.png'

export const LogoGreyComponent: React.FC = () => {
  return (
    <>
      <Logo id='logo' src={logoSrc} alt='AutoRide-Logo' />
    </>
  )
}
