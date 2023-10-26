import styled from '@emotion/styled'

import { FooterList } from '../../../../types/footerListTypes'
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
  list: FooterList[];
}

export const FooterMiddleList: React.FC<FooterMiddleListProps> = ({ list }) => {
  return (
    <FooterMiddleListContainer>
      {list.map(({ text, icon } : FooterList) => {
        return (
          <FooterMiddleListElement key={text}>
            <SetIcon icon={icon} />
            {text}
          </FooterMiddleListElement>
        )}
        )
      }
    </FooterMiddleListContainer>
  )
}
