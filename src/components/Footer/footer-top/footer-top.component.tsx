import Container from 'react-bootstrap/Container';
import styled from '@emotion/styled'

import { ContactBox } from '../../contact-box/contact-box.component';

const FooterTopWrapper = styled.div`
  background-color: var(--bs-gray-200);
  padding-top: 5rem;
  padding-bottom: 2.5rem;
`

export const FooterTop = () => {
  return (
    <FooterTopWrapper>
      <Container>
        <ContactBox />
      </Container>
    </FooterTopWrapper>
  )
}
