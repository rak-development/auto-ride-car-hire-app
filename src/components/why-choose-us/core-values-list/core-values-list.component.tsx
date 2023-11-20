import styled from "@emotion/styled"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from "@fortawesome/free-solid-svg-icons"

import { device } from "../../../devices-breakpoints"
import { type CircleContentDataType } from "../../../types/circle-content-data-types"

const CoreValuesListWrapper = styled.div`
  @media ${device.xl} {
    margin-top: 2.5rem;
    /* height: 43.75rem; */
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

const CoreValuesListElIconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 0.125rem;
  border-style: solid;
  border-radius: 50%;
  border-color: #e9ecef;
  width: 2.5rem;
  height: 2.5rem;
  background-color: var(--bs-white);
`

const CoreValuesListElIcon = styled(FontAwesomeIcon)`
  width: 1.375rem;
  height: 1.375rem;
  display: block;
  color: var(--bs-primary);
`

const CoreValuesListElTitle = styled.span`
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.875rem;
  padding-left: 1.5rem;
`

export const CoreValuesList = ({  header, subheader, coreValues }: CircleContentDataType) => {
  return (
    <CoreValuesListWrapper>
      <CoreValuesListHeader>
        {coreValues.length} {header}
        <CoreValuesSubheader> {subheader}</CoreValuesSubheader>
      </CoreValuesListHeader>
      <CoreValuesListUL>
        {coreValues.map(({title}) => (
          <CoreValuesListEl key={title}>
            <CoreValuesListElIconWrapper>
              <CoreValuesListElIcon icon={faCheck} />
            </CoreValuesListElIconWrapper>
            <CoreValuesListElTitle>{title}</CoreValuesListElTitle>
          </CoreValuesListEl>
        ))}
      </CoreValuesListUL>
    </CoreValuesListWrapper>
  )
}
