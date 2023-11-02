import { type FC } from 'react'
import styled from '@emotion/styled'

import { FooterList } from '../../../../types/footer-list-types'
import { SetIcon } from '../../../set-icon/set-icon.component'

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
  list: FooterList[]
}

export const FooterMiddleList: FC<FooterMiddleListProps> = ({ list }) => (
  <FooterMiddleListContainer>
    {list.map(({ text, icon }) => (
      <FooterMiddleListElement key={text}>
        <SetIcon icon={icon} />
        {text}
      </FooterMiddleListElement>
    ))}
  </FooterMiddleListContainer>
)
