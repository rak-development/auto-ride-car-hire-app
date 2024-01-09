import { type FC } from 'react'

import styled from '@emotion/styled'

import { Icon } from '../../icon/icon.component'
import { type TextPositionType } from '../core-values-circles/core-values-circles-data/core-values-circles-data.component'

type CoreValuesIconWrapperProps = {
  isResponsive: boolean
  $textPosition: TextPositionType
}

const CoreValuesIconWrapper = styled.div<CoreValuesIconWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ isResponsive }) => (isResponsive ? '2.5rem' : '3.75rem')};
  height: ${({ isResponsive }) => (isResponsive ? '2.5rem' : '3.75rem')};
  border-width: 0.125rem;
  border-style: solid;
  border-radius: 50%;
  border-color: var(--bs-gray-200);
  background-color: var(--bs-white);

  svg {
    width: ${({ isResponsive }) => (isResponsive ? '1.375rem' : '1.75rem')};
    height: ${({ isResponsive }) => (isResponsive ? '1.375rem' : '1.75rem')};
    display: block;
    color: var(--bs-primary);
    padding: 0;
  }
`

interface CoreValuesIconProps {
  isResponsive: boolean
  $textPosition: TextPositionType
}

export const CoreValuesIcon: FC<CoreValuesIconProps> = ({ isResponsive, $textPosition }) => {
  return (
    <CoreValuesIconWrapper
      isResponsive={isResponsive}
      className='circleWrapper'
      $textPosition={$textPosition}
    >
      <Icon icon={'fa-check' as Icon} />
    </CoreValuesIconWrapper>
  )
}
