import { type FC } from 'react'

import styled from '@emotion/styled'
import { css } from '@emotion/react'

import { CoreValuesIcon } from '../../core-values-icon/core-values-icon.component'
import { type TextPositionType } from '../core-values-circles-data/core-values-circles-data.component'

interface CoreValuesCircleItemStylesProps {
  textPosition: TextPositionType
}
const CoreValuesCircleItemLabel = styled.span`
  padding-left: 2.5rem;
  color: var(--bs-gray-800);
  font-size: 1.125rem;
  font-weight: 700;
  text-transform: uppercase;
`

const CoreValuesCircleItemWrapper = styled.div<CoreValuesCircleItemStylesProps>`
  position: absolute;
  display: flex;
  flex-direction: ${({textPosition}) => (textPosition === 'text-top' || textPosition === 'text-bottom' ? 'column' : 'row')};
  width: 100%;
  align-items: center;
  z-index: 1;
  justify-content: ${({textPosition}) => (textPosition === 'text-left' ? 'end' : 'start')};

  ${CoreValuesCircleItemLabel} {
    order: ${({textPosition}) => (textPosition === 'text-left' ? '0' : '1')};
  }
`



interface CoreValuesCircleItemProps {
  textPosition: TextPositionType,
  elementPosition: {
    top: number,
    left: number
  },
  title: string
}

export const CoreValuesCircleItem:FC<CoreValuesCircleItemProps> = ({textPosition, elementPosition, title}) => {
  return (
    <CoreValuesCircleItemWrapper
      textPosition={textPosition}
      style={{ top: elementPosition.top, left: elementPosition.left }}
    >
      <CoreValuesIcon isResponsive={false} textPosition={textPosition} />
      <CoreValuesCircleItemLabel>
        {title}
      </CoreValuesCircleItemLabel>
    </CoreValuesCircleItemWrapper>
  )
}
