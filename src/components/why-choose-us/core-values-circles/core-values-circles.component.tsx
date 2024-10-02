import styled from '@emotion/styled'

import { device } from '../../../devices-breakpoints'
import { type CircleContentDataType } from '../../../types/circle-content-data-types'
import { CoreValuesCirclesData } from './core-values-circles-data/core-values-circles-data.component'

const CoreValuesCirclesWrapper = styled.div`
  display: none;

  @media ${device.lg} {
    display: block;
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
        color: var(--bs-core-values-text-color);
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

export const CoreValuesCircles = ({
  header,
  subheader,
  coreValues,
}: CircleContentDataType) => {
  return (
    <CoreValuesCirclesWrapper>
      <CoreValuesCircle>
        <span>
          {coreValues.length} {header}
        </span>
        <span>{subheader}</span>
      </CoreValuesCircle>
      <CoreValuesCircle>
        <CoreValuesCirclesData coreValues={coreValues} />
      </CoreValuesCircle>
      <CoreValuesCircle />
    </CoreValuesCirclesWrapper>
  )
}
