import { type FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBus,
  faCar,
  faCheck,
  faChevronRight,
  faClock,
  faCoins,
  faEnvelope,
  faLocationDot,
  faMapLocationDot,
  faMobileScreenButton,
  faPhone,
  faQuoteLeft,
  faRoadCircleExclamation,
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
  'fa-car': faCar,
  'fa-coins': faCoins,
  'fa-bus': faBus,
  'fa-road-circle-exclamation': faRoadCircleExclamation,
  'fa-chevron-right': faChevronRight,
  'fa-quote-left': faQuoteLeft,
  'fa-check': faCheck,
}

export type Icon = keyof typeof icons

const getElementIcon = (icon: Icon) => icons[icon]

interface IconProps {
  icon: Icon
}

export const Icon: FC<IconProps> = ({ icon }) => (
  <ElementIcon icon={getElementIcon(icon)} />
)
