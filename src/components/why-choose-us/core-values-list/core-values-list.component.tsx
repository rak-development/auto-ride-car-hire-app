import styled from '@emotion/styled'

import { device } from '../../../devices-breakpoints'
import { type CircleContentDataType } from '../../../types/circle-content-data-types'
import { CoreValuesIcon } from '../core-values-icon/core-values-icon.component'

const CoreValuesListWrapper = styled.div`
  @media ${device.lg} {
    margin-top: 2.5rem;
    display: none;
  }
`

const CoreValuesListHeader = styled.span`
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  display: block;
`

const CoreValuesSubheader = styled.span`
  text-transform: lowercase;
`

const CoreValuesListUL = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`

const CoreValuesListEl = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
`

const CoreValuesListElTitle = styled.span`
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.875rem;
  padding-left: 1.5rem;
`

export const CoreValuesList = ({ header, subheader, coreValues }: CircleContentDataType) => {
  return (
    <CoreValuesListWrapper>
      <CoreValuesListHeader>
        {coreValues.length} {header}
        <CoreValuesSubheader> {subheader}</CoreValuesSubheader>
      </CoreValuesListHeader>
      <CoreValuesListUL>
        {coreValues.map(({ title }) => (
          <CoreValuesListEl key={title}>
            <CoreValuesIcon isResponsive={true} $textPosition='text-right' />
            <CoreValuesListElTitle>{title}</CoreValuesListElTitle>
          </CoreValuesListEl>
        ))}
      </CoreValuesListUL>
    </CoreValuesListWrapper>
  )
}
