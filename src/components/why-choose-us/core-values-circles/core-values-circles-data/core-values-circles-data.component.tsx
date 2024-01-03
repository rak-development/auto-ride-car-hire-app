import { type FC } from 'react'

import { type CircleContentCoreValuesType } from '../../../../types/circle-content-data-types'
import { CoreValuesCircleItem } from '../core-values-circle-item/core-values-circle-item.component'

export type TextPositionType = 'text-top' | 'text-bottom' | 'text-left' | 'text-right'

const prepareInitialPositions = (index: number, coreValues: CircleContentCoreValuesType[]) => {
  const div = 360 / coreValues.length
  const radius = 255
  const offsetToParentCenter = 255
  const offsetToChildCenter = 32
  const totalOffset = offsetToParentCenter - offsetToChildCenter
  const contentCircleSize = 510
  const tenPercentOfCircleSize = 90 / 100

  const y = Math.sin(div * index * (Math.PI / 180)) * radius
  const x = Math.cos(div * index * (Math.PI / 180)) * radius

  const isOffsetRight = x + totalOffset >= offsetToParentCenter
  const isOffsetTopBelow0 = y + totalOffset <= 0
  const isOffsetBottom90 = y + totalOffset >= tenPercentOfCircleSize * contentCircleSize

  return { totalOffset, x, y, isOffsetRight, isOffsetTopBelow0, isOffsetBottom90 }
}

const textPositionClasses = {
  textTopClass: 'text-top' as const,
  textBottomClass: 'text-bottom' as const,
  textLeftClass: 'text-left' as const,
  textRightClass: 'text-right' as const,
}

const prepareElementPosition = (
  totalOffset: number,
  x: number,
  y: number,
  textClassPosition: TextPositionType,
) => {
  const { textTopClass, textBottomClass, textLeftClass } = textPositionClasses
  const customY = y + totalOffset

  switch (textClassPosition) {
    case textLeftClass:
      return { top: customY, left: x - totalOffset }
    case textBottomClass:
      return { top: customY, left: x }
    case textTopClass:
      return { top: y + (totalOffset - 60), left: x }
    default:
      return { top: customY, left: x + totalOffset }
  }
}

const getElementPosition = (index: number, coreValues: CircleContentCoreValuesType[]) => {
  const { totalOffset, x, y, isOffsetRight, isOffsetTopBelow0, isOffsetBottom90 } =
    prepareInitialPositions(index, coreValues)

  const textClassPosition = getTextPosition(isOffsetTopBelow0, isOffsetBottom90, isOffsetRight)
  const elementPosition = prepareElementPosition(totalOffset, x, y, textClassPosition)

  return { textClassPosition, elementPosition }
}

const findY = (index: number, coreValues: CircleContentCoreValuesType[]) => {
  const div = 360 / coreValues.length
  const radius = 255
  return Math.sin(div * index * (Math.PI / 180)) * radius
}

const findX = (index: number, coreValues: CircleContentCoreValuesType[]) => {
  const div = 360 / coreValues.length
  const radius = 255
  return Math.cos(div * index * (Math.PI / 180)) * radius
}

const getTextPosition = (
  isOffsetTopBelow0: boolean,
  isOffsetBottom90: boolean,
  isOffsetRight: boolean,
) => {
  if (isOffsetTopBelow0) {
    return 'text-top'
  }
  if (isOffsetBottom90) {
    return 'text-bottom'
  }
  if (isOffsetRight) {
    return 'text-right'
  }

  return 'text-left'
}

interface CoreValuesCirclesDataProps {
  coreValues: CircleContentCoreValuesType[]
}

export const CoreValuesCirclesData: FC<CoreValuesCirclesDataProps> = ({ coreValues }) => {
  return (
    <>
      {coreValues.map(({ id, title }, index: number) => {
        const { elementPosition } = getElementPosition(index, coreValues)

        const y = findY(index, coreValues)
        const x = findX(index, coreValues)

        const offsetToParentCenter = 255
        const offsetToChildCenter = 32
        const totalOffset = offsetToParentCenter - offsetToChildCenter
        const contentCircleSize = 510
        const tenPercentOfCircleSize = 90 / 100

        const isOffsetRight = x + totalOffset >= offsetToParentCenter
        const isOffsetTopBelow0 = y + totalOffset <= 0
        const isOffsetBottom90 = y + totalOffset >= tenPercentOfCircleSize * contentCircleSize

        const textPosition = getTextPosition(isOffsetTopBelow0, isOffsetBottom90, isOffsetRight)

        return (
          <CoreValuesCircleItem
            key={id}
            textPosition={textPosition}
            elementPosition={elementPosition}
            title={title}
          />
        )
      })}
    </>
  )
}
