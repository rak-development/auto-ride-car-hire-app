import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from '@emotion/styled'

import { LogoGrey } from '../../logo-grey/logo-grey.component'
import { FooterMiddleList } from './footer-middle-list/footer-middle-list.component'

import SERVICES_LIST_DATA from '../../../services-list-data.json'
import CONTACT_LIST_DATA from '../../../contact-list-data.json'

import { FooterList } from '../../../types/footer-list-types'

const FooterMiddleWrapper = styled.div`
  background-color: var(--bs-gray-200);
`

const ContentBox = styled.div`
  color: var(--bs-gray-700);
  margin-bottom: 2.5rem;

  p {
    margin: 0;
    padding: 0.625rem 0;

    &:first-of-type {
      padding-top: 0;
    }
  }
`
const TitleBox = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1.5rem;
  color: var(--bs-gray-800);
  margin-bottom: 1.875rem;

  span {
    height: 0.0625rem;
    width: 3.125rem;
    display: block;
    margin-top: 0.625rem;
    background-color: var(--bs-primary);
  }
`

export const FooterMiddle = () => {
  const servicesList: FooterList[] = SERVICES_LIST_DATA
  const contactList: FooterList[] = CONTACT_LIST_DATA

  return (
    <FooterMiddleWrapper>
      <Container>
        <Row>
          <Col md={4}>
            <ContentBox>
              <TitleBox>
                About
                <span />
              </TitleBox>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales libero et varius
                commodo. Phasellus tristique magna sit amet aliquet mollis.
              </p>
              <p>
                <LogoGrey />
              </p>
            </ContentBox>
          </Col>
          <Col md={4}>
            <ContentBox>
              <TitleBox>
                Our Services
                <span />
              </TitleBox>
              <FooterMiddleList list={servicesList} />
            </ContentBox>
          </Col>
          <Col md={4}>
            <ContentBox>
              <TitleBox>
                Autoride
                <span />
              </TitleBox>
              <FooterMiddleList list={contactList} />
            </ContentBox>
          </Col>
        </Row>
      </Container>
    </FooterMiddleWrapper>
  )
}
