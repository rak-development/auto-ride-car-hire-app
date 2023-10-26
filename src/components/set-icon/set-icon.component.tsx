import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faChevronRight,
  faClock,
  faEnvelope,
  faLocationDot,
  faMapLocationDot,
  faMobileScreenButton,
  faPhone 
} from '@fortawesome/free-solid-svg-icons'

import styled from '@emotion/styled'

const ElementIcon = styled(FontAwesomeIcon)`
  padding-right: 1.375rem;
`

// not sure how to solve the type for below
const setElementIcon = (icon: any) => {
  let iconProp
  switch(icon) {
    case 'fa-location-dot':
      iconProp = faLocationDot
      break;
    case 'fa-map-location-dot':
      iconProp = faMapLocationDot
      break;
    case 'fa-phone':
      iconProp = faPhone
      break;
    case 'fa-mobile-screen-button':
      iconProp = faMobileScreenButton
      break;
    case 'fa-envelope':
      iconProp = faEnvelope
      break;
    case 'fa-clock':
      iconProp = faClock
      break;
    default:
      iconProp = faChevronRight
  }
  return iconProp
}

interface SetIconProps {
  icon: string | undefined;
}

export const SetIcon: React.FC<SetIconProps> = ({ icon }) => {
  return (
    <ElementIcon icon={setElementIcon(icon)} />
  )
}
