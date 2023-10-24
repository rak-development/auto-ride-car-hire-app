import styled from '@emotion/styled'
import { device } from '../../../devices-breakpoints'

export const FooterBottomWrapper = styled.div`
  font-size: 0.9375rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  @media ${device.md} { 
    padding-top: 1.5625rem;
    padding-bottom: 2.5rem;
  }
`
