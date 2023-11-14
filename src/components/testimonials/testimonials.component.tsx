import { useState } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel';

import styled from "@emotion/styled"

import imageUrl from '/src/assets/images/AutoRide-Testimonials.jpeg'


const TestimonialsWrapper = styled.div`
  background-color: var(--bs-gray-100);
`

const TestimonialsSliderCol = styled(Col)`
  padding: 0;
`

const TestimonialsCarousel = styled.div`
  padding: 3.125rem 1rem;
`

const TestimonialsImageCol = styled(Col)`
  padding: 0;
  display: flex;
`
type ImageURLprops = {
  imageUrl: string;
};

const TestimonialsImage = styled.div<ImageURLprops>`
  padding: 7.5rem 0;
  background-image: ${(imageProps) => `url(${imageProps.imageUrl})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  flex-grow: 1;
`

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <TestimonialsWrapper>
      <Container fluid>
        <Row>
          <TestimonialsSliderCol md={6}>
            <TestimonialsCarousel>
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  {/* <ExampleCarouselImage text="First slide" /> */}
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  {/* <ExampleCarouselImage text="Second slide" /> */}
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  {/* <ExampleCarouselImage text="Third slide" /> */}
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </TestimonialsCarousel>
          </TestimonialsSliderCol>
          <TestimonialsImageCol md={6}>
            <TestimonialsImage imageUrl={imageUrl} />
          </TestimonialsImageCol>
        </Row>
      </Container>
    </TestimonialsWrapper>
  )
}
