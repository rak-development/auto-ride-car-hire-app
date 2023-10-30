import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from '@emotion/styled';

import { SocialIcons } from '../../social-icons/social-icons.components';
import { device } from '../../../devices-breakpoints';

const FooterBottomWrapper = styled.div`
  font-size: 0.9375rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  @media ${device.md} { 
    padding-top: 1.5625rem;
    padding-bottom: 2.5rem;
  }
`

const FooterBottomRow = styled(Row)`
  align-items: center;
  text-align: center;

  @media ${device.md} { 
    text-align: start;
  }
`

export const FooterBottom = () => {
  return (
    <FooterBottomWrapper>
      <Container>
        <FooterBottomRow>
          <Col md={6}>Copyright 2023 AutoRide by Rafal Krohne</Col>
          <Col md={6}>
            <SocialIcons />
          </Col>
        </FooterBottomRow>
      </Container>
    </FooterBottomWrapper>
  )
}
