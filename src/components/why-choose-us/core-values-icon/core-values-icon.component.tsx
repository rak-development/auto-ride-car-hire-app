import { type FC } from "react"

import styled from "@emotion/styled"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from "@fortawesome/free-solid-svg-icons"

type CoreValuesIconWrapperProps = {
  isResponsive: boolean
}

const CoreValuesIconWrapper = styled.div<CoreValuesIconWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.isResponsive ? '2.5rem' : '3.75rem'};
  height: ${(props) => props.isResponsive ? '2.5rem' : '3.75rem'};
  border-width: 0.125rem;
  border-style: solid;
  border-radius: 50%;
  border-color: var(--bs-gray-200);
  background-color: var(--bs-white);
`

const CoreValuesIconElement = styled(FontAwesomeIcon)<CoreValuesIconWrapperProps>`
  width: ${(props) => props.isResponsive ? '1.375rem' : '1.75rem'};
  height: ${(props) => props.isResponsive ? '1.375rem' : '1.75rem'};
  display: block;
  color: var(--bs-primary); 
`

interface CoreValuesIconProps {
  isResponsive: boolean
}

export const CoreValuesIcon: FC<CoreValuesIconProps> = ({isResponsive}) => {
  return (
    <CoreValuesIconWrapper isResponsive={isResponsive} className="circleWrapper">
        <CoreValuesIconElement isResponsive={isResponsive} icon={faCheck} />
      </CoreValuesIconWrapper>
)
}
