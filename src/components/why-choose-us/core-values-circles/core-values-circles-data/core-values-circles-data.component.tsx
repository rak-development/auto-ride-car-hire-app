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
  textTopClass: 'text-top' as TextPositionType,
  textBottomClass: 'text-bottom' as TextPositionType,
  textLeftClass: 'text-left' as TextPositionType,
  textRightClass: 'text-right' as TextPositionType,
}

const prepareTextPosition = (
  isOffsetTopBelow0: boolean,
  isOffsetBottom90: boolean,
  isOffsetRight: boolean,
) => {
  const { textTopClass, textBottomClass, textLeftClass, textRightClass } = textPositionClasses

  if (isOffsetTopBelow0) {
    return textTopClass
  }
  if (isOffsetBottom90) {
    return textBottomClass
  }
  if (isOffsetRight) {
    return textRightClass
  }

  return textLeftClass
}

const prepareElementPosition = (
  totalOffset: number,
  x: number,
  y: number,
  textClassPosition: TextPositionType,
) => {
  const { textTopClass, textBottomClass, textLeftClass } = textPositionClasses

  let customY = y + totalOffset
  let customX = x + totalOffset

  switch (textClassPosition) {
    case textLeftClass:
      customX = x - totalOffset
      break
    case textBottomClass:
      customX = x
      break
    case textTopClass:
      customY = y + (totalOffset - 60)
      customX = x
      break
  }

  return { top: customY, left: customX }
}

const getElementPosition = (index: number, coreValues: CircleContentCoreValuesType[]) => {
  const { totalOffset, x, y, isOffsetRight, isOffsetTopBelow0, isOffsetBottom90 } =
    prepareInitialPositions(index, coreValues)

  const textClassPosition = prepareTextPosition(isOffsetTopBelow0, isOffsetBottom90, isOffsetRight)
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
  const { textTopClass, textBottomClass, textLeftClass, textRightClass } = textPositionClasses

  if (isOffsetTopBelow0) {
    return textTopClass
  }
  if (isOffsetBottom90) {
    return textBottomClass
  }
  if (isOffsetRight) {
    return textRightClass
  }

  return textLeftClass
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
