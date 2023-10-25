import Container from 'react-bootstrap/Container';
import styled from '@emotion/styled'
import { faLocationDot, faMobileScreenButton, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { device } from '../../../../devices-breakpoints';

const ContactContainer = styled.div`
  color: var(--bs-gray-800);
  font-size: 0.9375rem;

  @media ${device.md} { 
    display: flex;
    justify-content: space-between;
  }

  @media ${device.lg} { 
    justify-content: start;
  }
`;

const ContactElement = styled.div`
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;

  svg {
    font-size: 1rem;

    @media ${device.md} { 
      padding-right: 0.9375rem;
    }
  }

  @media ${device.md} { 
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0.9375rem;
    margin-right: 1.5625rem;
  }
`;

export const HeaderTopContactDetails = () => {
  return (
    <Container>
      <ContactContainer>
        <ContactElement>
          <FontAwesomeIcon icon={faLocationDot} />
          Jasionka 942, 36-002 Jasionka
        </ContactElement>
        <ContactElement>
          <FontAwesomeIcon icon={faMobileScreenButton} />
          123 456 789
        </ContactElement>
        <ContactElement>
          <FontAwesomeIcon icon={faClock} />
          24/7
        </ContactElement>
      </ContactContainer>
    </Container>
  )
}
