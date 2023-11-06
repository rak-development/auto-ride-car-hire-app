import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import styled from '@emotion/styled'

import { SectionTemplate } from '../section-template/section-template.component'

import WHAT_WE_OFFER_DATA from '../../what-we-offer-data.json'

import airportTransfer from '/src/assets/images/what-we-offer/AutoRide-Airport-Transfer.jpg'
import { device } from '../../devices-breakpoints'

import { WhatWeOfferDataType } from '../../types/whatWeOfferTypes'

const WhatWeOfferContainer = styled(Container)`
  margin-top: 5rem;
`

const WhatWeOfferRow = styled(Row)`
  --bs-gutter-y: 1.5rem;
  --bs-gutter-x: 1.5rem;
`

const WhatWeOfferCard = styled(Card)`
  color: var(--bs-white);
  border-radius: 0;
  border: none;
`

const WhatWeOfferImage = styled(Card.Img)`
  height: 17.1875rem;
  object-fit: cover;
  object-position: center;
  border-radius: 0;
`

const WhatWeOfferOverlay = styled(Card.ImgOverlay)`
  height: 17.1875rem;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 0;
  display: flex;
  align-items: flex-end;
`

const WhatWeOfferCardTitle = styled(Card.Title)`
  font-size: 1rem;
  text-transform: uppercase;
  text-align: left;
  position: relative;

  &:before {
    content: '';
    width: 1.875rem;
    height: 0.0625rem;
    background: var(--bs-white);
    top: -0.625rem;
    position: absolute;
  }

  @media ${device.lg} {
    font-size: 1.125rem;
  }
`

export const WhatWeOffer = () => {
  const whatWeOfferData: WhatWeOfferDataType[] = WHAT_WE_OFFER_DATA
  return (
    <SectionTemplate
      subheader='What We Offer'
      header='See What We Can Do for You'
      bgMode='--bs-gray-100'
    >
      <WhatWeOfferContainer>
        <WhatWeOfferRow>
          {whatWeOfferData.map(({ id, colSize, title, image }: WhatWeOfferDataType) => {
            return (
              <Col md={colSize} key={id}>
                <WhatWeOfferCard bg={'dark'}>
                  <WhatWeOfferImage variant='top' src={airportTransfer} alt={title} />
                  <WhatWeOfferOverlay>
                    <WhatWeOfferCardTitle>{title}</WhatWeOfferCardTitle>
                  </WhatWeOfferOverlay>
                </WhatWeOfferCard>
              </Col>
            )
          })}
        </WhatWeOfferRow>
      </WhatWeOfferContainer>
    </SectionTemplate>
  )
}
