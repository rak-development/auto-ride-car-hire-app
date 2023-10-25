import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styled from "@emotion/styled"
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FooterList } from '../../../../types/footerListTypes'

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

const FooterMiddleListElementIcon = styled(FontAwesomeIcon)`
  padding-right: 1.375rem;
`

interface FooterMiddleListProps {
  list: FooterList[];
}

export const FooterMiddleList: React.FC<FooterMiddleListProps> = ({ list }) => {
  return (
    <FooterMiddleListContainer>
      {list.map((el: any) => (
        <FooterMiddleListElement key = {el.text}>
          <FooterMiddleListElementIcon icon={faChevronRight} />
          {el.text}
        </FooterMiddleListElement>)
        )
      }
    </FooterMiddleListContainer>
  )
}
