import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ContentBox, FooterMiddleWrapper, TitleBox } from './footer-middle.styles'
import { LogoGreyComponent } from '../../logo-grey-component/logo-grey-component.component'

export const FooterMiddle: React.FC = () => {
  return (
    <FooterMiddleWrapper>
      <Container>
        <Row>
          <Col md={4}>
            <ContentBox>
              <TitleBox>About<span></span></TitleBox>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut sodales libero et varius commodo. Phasellus tristique magna sit amet aliquet mollis.
              </p>
              <p><LogoGreyComponent /></p>
            </ContentBox>
          </Col>
        </Row>
      </Container>
    </FooterMiddleWrapper>
  )
}
