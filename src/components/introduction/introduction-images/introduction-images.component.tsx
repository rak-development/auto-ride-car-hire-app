import { type FC } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import styled from '@emotion/styled';

import { type IntroductionImagesType } from '../../../types/introduction-data-types';

const IntroductionImagesRow = styled(Row)`
  --bs-gutter-x: 0;
  --bs-gutter-y: 0;
  margin-bottom: 2.5rem;
`

const IntroductionImage = styled(Image)`
  object-fit: cover;
  object-position: center;
  width: 100%;
`

interface IntroductionContentProps {
  images: IntroductionImagesType[];
}

export const IntroductionImages: FC<IntroductionContentProps> = ({ images }) => {
  return (
    <IntroductionImagesRow>
      {images.map(({ id, title, image }) => 
        (
          <Col key={id}>
            <IntroductionImage  
              style={{ marginTop: id === 2 ? '40px' : '0' }}
              src={image}
              alt={`AutoRide ${title}`}
              fluid />
          </Col>
        )
      )}
    </IntroductionImagesRow>
  )
}
