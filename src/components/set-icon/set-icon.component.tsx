import { type FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faClock,
  faEnvelope,
  faLocationDot,
  faMapLocationDot,
  faMobileScreenButton,
  faPhone,
  faCar,
  faCoins,
  faBus,
  faRoadCircleExclamation,
} from '@fortawesome/free-solid-svg-icons'

import styled from '@emotion/styled'

const ElementIcon = styled(FontAwesomeIcon)`
  padding-right: 1.375rem;
`

// not sure how to solve the type for below
const setElementIcon = (icon: any) => {
  switch (icon) {
    case 'fa-location-dot':
      return faLocationDot
    case 'fa-map-location-dot':
      return faMapLocationDot
    case 'fa-phone':
      return faPhone
    case 'fa-mobile-screen-button':
      return faMobileScreenButton
    case 'fa-envelope':
      return faEnvelope
    case 'fa-clock':
      return faClock
    case 'fa-car':
      return faCar
    case 'fa-coins':
      return faCoins
    case 'fa-bus':
      return faBus
    case 'fa-road-circle-exclamation':
      return faRoadCircleExclamation
    default:
      return faChevronRight
  }
}

interface SetIconProps {
  icon: string | undefined
}

export const SetIcon: FC<SetIconProps> = ({ icon }) => <ElementIcon icon={setElementIcon(icon)} />
