import Container from 'react-bootstrap/Container';

import { ContactBox } from '../../contact-box/contact-box.component';
import { FooterTopWrapper } from './footer-top-styles'

export const FooterTop: React.FC = () => {
  return (
    <FooterTopWrapper>
      <Container>
        <ContactBox />
      </Container>
    </FooterTopWrapper>
  )
}
