import { type FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  type IconName,
  faChevronRight,
  faClock,
  faEnvelope,
  faLocationDot,
  faMapLocationDot,
  faMobileScreenButton,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'

import styled from '@emotion/styled'

const ElementIcon = styled(FontAwesomeIcon)`
  padding-right: 1.375rem;
`

const icons = {
  'fa-location-dot': faLocationDot,
  'fa-map-location-dot': faMapLocationDot,
  'fa-phone': faPhone,
  'fa-mobile-screen-button': faMobileScreenButton,
  'fa-envelope': faEnvelope,
  'fa-clock': faClock,
  'fa-chevron-right': faChevronRight
}

const getElementIcon = (key: keyof typeof icons) => {
  return icons[key];
}

interface SetIconProps {
  icon: any
}

export const SetIcon: FC<SetIconProps> = ({ icon }) => <ElementIcon icon={getElementIcon(icon)} />
