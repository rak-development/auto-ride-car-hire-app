import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import styled from '@emotion/styled';

import { IntroductionImagesType } from '../../../types/introductionDataTypes';

const IntroductionImagesRow = styled(Row)`
  --bs-gutter-x: 0;
  --bs-gutter-y: 0;
  margin-bottom: 2.5rem;
`

const IntroductionImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`

interface IntroductionContentProps {
  images: IntroductionImagesType[];
}

// Images are not loading properly
export const IntroductionImages: React.FC<IntroductionContentProps> = ({ images }) => {
  return (
    <IntroductionImagesRow>
      {images.map(({ id, image }: IntroductionImagesType) => {
        return (
          <Col key={id}>
            <IntroductionImage  
              style={{ marginTop: id === 2 ? '40px' : '0' }}
              src={image}
              alt='AutoRide-Introduction'
              fluid />
            {image}
          </Col>
        )
      })}
    </IntroductionImagesRow>
  )
}
