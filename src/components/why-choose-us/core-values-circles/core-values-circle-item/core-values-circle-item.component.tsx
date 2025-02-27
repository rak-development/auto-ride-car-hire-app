import { type FC } from 'react'

import styled from '@emotion/styled'

import { CoreValuesIcon } from '../../core-values-icon/core-values-icon.component'
import { type TextPositionType } from '../core-values-circles-data/core-values-circles-data.component'

interface CoreValuesCircleItemStylesProps {
  $textPosition: TextPositionType
}

const paddingSizeMap: Record<TextPositionType, string> = {
  'text-top': '0 0 2.5rem 0',
  'text-bottom': '2.5rem 0 0 0',
  'text-left': '0 2.5rem 0 0',
  'text-right': '0 0 0 2.5rem',
}

const flexDirectionMap: Record<TextPositionType, string> = {
  'text-top': 'column-reverse',
  'text-bottom': 'column',
  'text-left': 'row-reverse',
  'text-right': 'row',
}

const CoreValuesCircleItemLabel = styled.span<CoreValuesCircleItemStylesProps>`
  padding: ${({ $textPosition }) => paddingSizeMap[$textPosition]};
  color: var(--bs-gray-800);
  font-size: 1.125rem;
  font-weight: 700;
  text-transform: uppercase;
`

const CoreValuesCircleItemWrapper = styled.div<CoreValuesCircleItemStylesProps>`
  position: absolute;
  display: flex;
  flex-direction: ${({ $textPosition }) => flexDirectionMap[$textPosition]};
  width: 100%;
  align-items: center;
  z-index: 1;
  justify-content: ${({ $textPosition }) =>
    $textPosition === 'text-left' ? 'end' : 'start'};
`

interface CoreValuesCircleItemProps {
  $textPosition: TextPositionType
  elementPosition: {
    top: number
    left: number
  }
  title: string
}

export const CoreValuesCircleItem: FC<CoreValuesCircleItemProps> = ({
  $textPosition,
  elementPosition,
  title,
}) => {
  return (
    <CoreValuesCircleItemWrapper
      $textPosition={$textPosition}
      style={{ top: elementPosition.top, left: elementPosition.left }}>
      <CoreValuesIcon isResponsive={false} $textPosition={$textPosition} />
      <CoreValuesCircleItemLabel $textPosition={$textPosition}>
        {title}
      </CoreValuesCircleItemLabel>
    </CoreValuesCircleItemWrapper>
  )
}
