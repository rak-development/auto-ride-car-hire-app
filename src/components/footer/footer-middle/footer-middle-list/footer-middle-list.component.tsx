import { type FC } from 'react'
import styled from '@emotion/styled'

import { z } from 'zod'

import { Icon } from '../../../icon/icon.component'
import { type contactListDataSchema, type servicesListDataSchema } from '../footer-middle.component'

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

type ServicesListDataType = z.infer<typeof servicesListDataSchema>
type ContactListDataType = z.infer<typeof contactListDataSchema>

interface FooterMiddleListProps {
  data: ServicesListDataType | ContactListDataType
}

export const FooterMiddleList: FC<FooterMiddleListProps> = ({ data }) => (
  <FooterMiddleListContainer>
    {data.map((el) => {
      const { text } = el
      const isIcon = 'icon' in el && el.icon
      return (
        <FooterMiddleListElement key={text}>
          {isIcon && <Icon icon={isIcon as Icon} />}
          {text}
        </FooterMiddleListElement>
      )
    })}
  </FooterMiddleListContainer>
)
