import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcaseRolling, faUser } from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled'

import { SectionTemplate } from '../section-template/section-template.component'

import OUR_FLEET_DATA from '../../assets/db/our-fleet-data.json'

import { device } from '../../devices-breakpoints'

const OurFleetContainer = styled(Container)`
  margin-top: 5rem;
`

const OurFleetRow = styled(Row)`
  --bs-gutter-y: 3rem;
  --bs-gutter-x: 3rem;

  @media ${device.md} {
    --bs-gutter-y: 1.5rem;
    --bs-gutter-x: 1.5rem;
  }
`

const OurFleetCard = styled(Card)`
  border-radius: 0;
  color: var(--bs-white);
  border: 0;
`

const OurFleetCardImage = styled(Card.Img)`
  height: 15.625rem;
  object-fit: cover;
  border-radius: 0;
`

const OurFleetCardImageOverlay = styled(Card.ImgOverlay)`
  height: 15.625rem;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: flex-end;
  border-radius: 0;
`

const OurFleetCardTitle = styled(Card.Title)`
  font-size: 1.5rem;
`

const OurFleetCardBody = styled(Card.Body)`
  background-color: var(--bs-white);
  color: var(--bs-black);
  display: flex;
  justify-content: center;
`

const OurFleetCardBodyRow = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`

const OurFleetCardLuggageCapacity = styled.div`
  width: 1.875rem;
  height: 1.875rem;
  border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color);
  border-radius: 50%;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const OurFleet = () => (
  <SectionTemplate subheader='Our Fleet' header='Browse Our Limos' bgMode='--bs-gray-100'>
    <OurFleetContainer>
      <OurFleetRow>
        {OUR_FLEET_DATA.map(({ id, image, title, passengerNumber, luggageNumber }) => (
          <Col md={4} key={id}>
            <OurFleetCard>
              <OurFleetCardImage variant='top' src={image} alt={title} />
              <OurFleetCardImageOverlay>
                <OurFleetCardTitle>{title}</OurFleetCardTitle>
              </OurFleetCardImageOverlay>
              <OurFleetCardBody>
                <OurFleetCardBodyRow>
                  <FontAwesomeIcon icon={faUser} />
                  <OurFleetCardLuggageCapacity>{passengerNumber}</OurFleetCardLuggageCapacity>
                </OurFleetCardBodyRow>
                <OurFleetCardBodyRow>
                  <FontAwesomeIcon icon={faSuitcaseRolling} />
                  <OurFleetCardLuggageCapacity>{luggageNumber}</OurFleetCardLuggageCapacity>
                </OurFleetCardBodyRow>
              </OurFleetCardBody>
            </OurFleetCard>
          </Col>
        ))}
      </OurFleetRow>
    </OurFleetContainer>
  </SectionTemplate>
)
