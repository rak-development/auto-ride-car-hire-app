import styled from "@emotion/styled"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { device } from "../../../devices-breakpoints"
import { type CircleContentCoreValuesType, type CircleContentDataType } from "../../../types/circle-content-data-types"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

const CoreValuesCirclesWrapper = styled.div`
  @media ${device.xl} {
    margin-top: 2.5rem;
    height: 43.75rem;
    position: relative;
  }
`

const CoreValuesCircle = styled.div`
  top: 50%;
  left: 50%;
  display: flex;
  border-width: 0.0625rem;
  position: absolute;
  border-style: solid;
  border-radius: 50%;
  flex-direction: column;
  justify-content: center;

  &:first-of-type {
    width: 21.25rem;
    height: 21.25rem;
    margin-left: -10.625rem;
    margin-top: -10.625rem;
    background-color: var(--bs-gray-200);
    border: none;
    padding: 3.125rem;
    text-align: center;

    span {
      &:first-of-type {
        font-size: 1.125rem;
        font-weight: 700;
        text-transform: none;
        line-height: 1.66666em;
        color: var(--bs-primary);
        margin-bottom: 1.25rem;
      }
      &:last-of-type {
        font-size: 1.375rem;
        font-weight: 300;
        line-height: 1.63636em;
      }
    }
  }

  &:nth-of-type(2) {
    width: 31.875rem;
    height: 31.875rem;
    margin-left: -15.9375rem;
    margin-top: -15.9375rem;
    border-width: 0.125rem;
    border-color: var(--bs-gray-200);
  }

  &:nth-of-type(3) {
    width: 37.5rem;
    height: 37.5rem;
    margin-left: -18.75rem;
    margin-top: -18.75rem;
    border-color: var(--bs-gray-200);
  }
`

const CoreValuesCircleItem = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  align-items: center;
  z-index: 1;
`

const CoreValuesCircleItemCircleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.75rem;
  height: 3.75rem;
  border-width: 0.125rem;
  border-style: solid;
  border-radius: 50%;
  border-color: var(--bs-gray-200);
`

const CoreValuesCircleItemCircle = styled(FontAwesomeIcon)`
  width: 1.75rem;
  height: 1.75rem;
  display: block;
  color: var(--bs-primary);
`

const CoreValuesCircleItemLabel = styled.span`
  padding-left: 2.5rem;
  color: var(--bs-gray-800);
  font-size: 1.125rem;
  font-weight: 700;
  text-transform: uppercase;
`

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
  textTopClass: 'circle-item__text-top',
  textBottomClass: 'circle-item__text-bottom',
  textLeftClass: 'circle-item__text-left',
  textRightClass: 'circle-item__text-right',
}

const prepareTextPosition = (isOffsetTopBelow0: boolean, isOffsetBottom90: boolean, isOffsetRight: boolean) => {
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

const prepareElementPosition = (totalOffset: number, x: number, y: number, textClassPosition: string) => {
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

export const CoreValuesCircles = ({  header, subheader, coreValues }: CircleContentDataType) => {
  return (
    <CoreValuesCirclesWrapper>
      <CoreValuesCircle>
        <span>{coreValues.length} {header}</span>
        <span>{subheader}</span>
      </CoreValuesCircle>
      <CoreValuesCircle>
        {coreValues.map(({id, title}, index) => {
          const { textClassPosition, elementPosition } = getElementPosition(index, coreValues)
          console.log('textClassPosition: ', textClassPosition)
          console.log('elementPosition: ', elementPosition)
          return (
            <CoreValuesCircleItem 
              key={id}
              className={textClassPosition}
              style={{top: elementPosition.top, left: elementPosition.left }}>
              <CoreValuesCircleItemCircleWrapper>
                <CoreValuesCircleItemCircle icon={faCheck} />
              </CoreValuesCircleItemCircleWrapper>
              <CoreValuesCircleItemLabel>{title}</CoreValuesCircleItemLabel>
            </CoreValuesCircleItem>
          )
        })}
      </CoreValuesCircle>
      <CoreValuesCircle></CoreValuesCircle>
    </CoreValuesCirclesWrapper>
  )
}
