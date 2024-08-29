import styled from '@emotion/styled'
import Container from 'react-bootstrap/Container'

import { HeaderTopContactDetails } from './header-top-contact-details/header-top-contact-details.component'
import { SocialIcons } from '../../social-icons/social-icons.components'
import { device } from '../../../devices-breakpoints'
import { HeaderTopDarkModeSwitch } from './header-top-darkmode-switch/header-top-darkmode-switch'

const HeaderTopWrapper = styled.div`
  background-color: var(--bs-gray-100);
`

const HeaderTopContainer = styled(Container)`
  font-weight: 400;
  line-height: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  @media ${device.md} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const HeaderTop = () => {
  return (
    <HeaderTopWrapper>
      <HeaderTopContainer>
        <HeaderTopContactDetails />
        <div className='d-md-flex'>
          <SocialIcons />
          <HeaderTopDarkModeSwitch />
        </div>
      </HeaderTopContainer>
    </HeaderTopWrapper>
  )
}
