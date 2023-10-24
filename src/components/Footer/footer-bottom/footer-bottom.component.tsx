import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { SocialIcons } from '../../social-icons/social-icons.components'
import { FooterBottomWrapper } from './footer-bottom.styles'

export const FooterBottom: React.FC = () => {
  return (
    <FooterBottomWrapper>
      <Container>
        <Row className='align-items-center text-center text-md-start'>
          <Col md={6}>Copyright 2023 AutoRide by Rafal Krohne</Col>
          <Col md={6}>
            <SocialIcons />
          </Col>
        </Row>
      </Container>
    </FooterBottomWrapper>
  )
}
