import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styled from '@emotion/styled'

import { SectionTemplate } from '../section-template/section-template.component'

import KEY_FEATURES_DATA from '../../key-features-data.json'
import { device } from '../../devices-breakpoints'
import { SetIcon } from '../set-icon/set-icon.component'

const KeyFeaturesSection = styled.section`
  padding-top: 6.875rem;
  text-align: center;
`

const KeyFeatureContainer = styled.div`
  margin-bottom: 2.8125rem;

  @media ${device.lg} { 
    padding-left: 1.875rem;
    padding-right: 1.875rem;
    margin-bottom: 2.8125rem;
  }
`

const KeyFeatureIconContainer = styled.div`
  position: relative;
  display: inline-block;

  svg {
    color: var(--bs-primary);
    width: 3rem;
    height: 3rem;
    position: absolute;
    z-index: 2;
    top: -0.625rem;
    left: -0.625rem;
  }

  span {
    background-color: var(--bs-gray-200);
    z-index: 1;
    width: 3rem;
    height: 3rem;
    display: block;
    border-radius: 50%;
  }
`

const KeyFeatureHeader = styled.div`
  font-size: 1rem;
  font-weight: 700;
  text-transform: none;
  line-height: 1.66rem;
  margin-top: 1.875rem;
  margin-bottom: 0.9375rem;
  color: var(--bs-gray-800);

  @media ${device.lg} { 
    font-size: 1.125rem;
  }
`

const KeyFeatureBody = styled.div`
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.875rem;
  color: var(--bs-gray-700);
`

export const KeyFeatures = () => {
  const keyFeaturesData: any[] = KEY_FEATURES_DATA

  return (
    <SectionTemplate
      subheader='Key Features'
      header='Make Your Trip Your Way With Us'
      bgMode='--bs-white'>
      <KeyFeaturesSection>
        <Container>
        <Row>
          {keyFeaturesData.map(({ id, icon, header, body }) => {
            return (
              <Col md={3} key={id}>
                <KeyFeatureContainer>
                  <KeyFeatureIconContainer>
                    <SetIcon icon={icon} />
                    <span></span>
                  </KeyFeatureIconContainer>
                  <KeyFeatureHeader>{header}</KeyFeatureHeader>
                  <KeyFeatureBody>{body}</KeyFeatureBody>
                </KeyFeatureContainer>
              </Col>
            )
          })}
        </Row>
        </Container>
      </KeyFeaturesSection>
    </SectionTemplate>
  )
}
