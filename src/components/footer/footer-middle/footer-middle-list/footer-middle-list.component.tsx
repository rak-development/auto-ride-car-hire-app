import { type FC } from 'react'
import styled from '@emotion/styled'

import { Icon } from '../../../icon/icon.component'
import {
  type ServicesListDataType,
  type ContactListDataType,
} from '../footer-middle.component'

const FooterMiddleListContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const FooterMiddleListElement = styled.li`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.66rem;
  display: flex;
  align-items: center;
  padding-top: 0.625rem;

  &:first-of-type {
    padding-top: 0;
  }
`

interface FooterMiddleListProps {
  data: ServicesListDataType | ContactListDataType
}

export const FooterMiddleList: FC<FooterMiddleListProps> = ({ data }) => (
  <FooterMiddleListContainer>
    {data.map((el) => {
      const { text } = el
      const isIcon = el.type === 'contact-data'
      return (
        <FooterMiddleListElement key={text}>
          {isIcon && <Icon icon={el.icon as Icon} />}
          {text}
        </FooterMiddleListElement>
      )
    })}
  </FooterMiddleListContainer>
)
