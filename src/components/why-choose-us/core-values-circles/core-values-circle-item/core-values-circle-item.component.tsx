import { type FC } from 'react'

import styled from '@emotion/styled'

import { CoreValuesIcon } from '../../core-values-icon/core-values-icon.component'
import { type TextPositionType } from '../core-values-circles-data/core-values-circles-data.component'

interface CoreValuesCircleItemStylesProps {
  textPosition: TextPositionType
}

const getPaddingSize = (values: TextPositionType) => {
  switch (values) {
    case 'text-top':
      return '0 0 2.5rem 0'
    case 'text-bottom':
      return '2.5rem 0 0 0'
    case 'text-left':
      return '0 2.5rem 0 0'
    case 'text-right':
      return '0 0 0 2.5rem'
  }
}

const CoreValuesCircleItemLabel = styled.span<CoreValuesCircleItemStylesProps>`
  padding: ${({ textPosition }) => getPaddingSize(textPosition)};
  color: var(--bs-gray-800);
  font-size: 1.125rem;
  font-weight: 700;
  text-transform: uppercase;
`

const getFlexDirection = (values: TextPositionType) => {
  switch (values) {
    case 'text-top':
      return 'column-reverse'
    case 'text-bottom':
      return 'column'
    case 'text-left':
      return 'row-reverse'
    case 'text-right':
      return 'row'
  }
}

const CoreValuesCircleItemWrapper = styled.div<CoreValuesCircleItemStylesProps>`
  position: absolute;
  display: flex;
  flex-direction: ${({ textPosition }) => getFlexDirection(textPosition)};
  width: 100%;
  align-items: center;
  z-index: 1;
  justify-content: ${({ textPosition }) => (textPosition === 'text-left' ? 'end' : 'start')};
`

interface CoreValuesCircleItemProps {
  textPosition: TextPositionType
  elementPosition: {
    top: number
    left: number
  }
  title: string
}

export const CoreValuesCircleItem: FC<CoreValuesCircleItemProps> = ({
  textPosition,
  elementPosition,
  title,
}) => {
  return (
    <CoreValuesCircleItemWrapper
      textPosition={textPosition}
      style={{ top: elementPosition.top, left: elementPosition.left }}
    >
      <CoreValuesIcon isResponsive={false} textPosition={textPosition} />
      <CoreValuesCircleItemLabel textPosition={textPosition}>{title}</CoreValuesCircleItemLabel>
    </CoreValuesCircleItemWrapper>
  )
}
