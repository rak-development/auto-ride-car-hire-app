import { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'

import styled from '@emotion/styled'

import imageUrl from '/src/assets/images/AutoRide-Testimonials.jpeg'

import TESTIMONIALS_DATA from '../../testimonials-data.json'
import { device } from '../../devices-breakpoints'

const TestimonialsWrapper = styled.div`
  background-color: var(--bs-gray-100);
`

const TestimonialsSliderCol = styled(Col)`
  padding: 0;
`

const TestimonialsCarouselWrapper = styled.div`
  padding: 3.125rem 1rem;

  @media ${device.lg} {
    padding: 6.25rem 5rem;
  }
`

const TestimonialsImageCol = styled(Col)`
  padding: 0;
  display: flex;
`
type ImageURLProps = {
  imageUrl: string
}

const TestimonialsImage = styled.div<ImageURLProps>`
  padding: 7.5rem 0;
  background-image: ${(imageProps) => `url(${imageProps.imageUrl})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  flex-grow: 1;
`

const TheCarousel = styled(Carousel)`
  .carousel-indicators {
    margin-bottom: 0;
  }

  .carousel-indicators [data-bs-target] {
    width: 0.5rem;
    height: 0.5rem;
    background-color: var(--bs-gray-500);
    border: none;
    border-radius: 50%;
    outline: none;
    transition: background-color ease 250ms;
    cursor: pointer;
    border-width: 0.125rem;
    border-style: solid;
    border-radius: 0.6875rem;
    border-color: var(--bs-gray-500);
    display: block;
  }

  .carousel-indicators .active {
    background-color: transparent;
    pointer-events: none;
    border-color: var(--bs-primary);
  }

  .carousel-caption {
    position: relative;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0;
  }
`

const TestimonialIconWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 10px;
`

const TestimonialIcon = styled(FontAwesomeIcon)`
  color: var(--bs-primary);
  width: 3rem;
  height: 3rem;
  z-index: 2;
  top: -0.625rem;
  left: -0.625rem;
  position: absolute;
`

const TestimonialIconBackground = styled.span`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(--bs-white);
  display: block;
`

const TestimonialQuote = styled.div`
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.63636em;
  padding: 0.625rem 0;
  color: var(--bs-black);

  @media ${device.lg} {
    font-size: 1.375rem;
  }
`

const TestimonialAuthor = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1.125rem;
  letter-spacing: 0.125rem;
  margin-top: 1.875rem;
  color: var(--bs-black);
  padding-bottom: 13.125rem;
`

export const Testimonials = () => {
  const [index, setIndex] = useState(0)

  return (
    <TestimonialsWrapper>
      <Container fluid>
        <Row>
          <TestimonialsSliderCol md={6}>
            <TestimonialsCarouselWrapper>
              <TheCarousel activeIndex={index} onSelect={setIndex} controls={false}>
                {TESTIMONIALS_DATA.map(({ id, text, author }) => (
                  <Carousel.Item key={id}>
                    <Carousel.Caption>
                      <TestimonialIconWrapper>
                        <TestimonialIcon icon={faComments} />
                        <TestimonialIconBackground />
                      </TestimonialIconWrapper>
                      <TestimonialQuote>{text}</TestimonialQuote>
                      <TestimonialAuthor>{author}</TestimonialAuthor>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </TheCarousel>
            </TestimonialsCarouselWrapper>
          </TestimonialsSliderCol>
          <TestimonialsImageCol md={6}>
            <TestimonialsImage imageUrl={imageUrl} />
          </TestimonialsImageCol>
        </Row>
      </Container>
    </TestimonialsWrapper>
  )
}
