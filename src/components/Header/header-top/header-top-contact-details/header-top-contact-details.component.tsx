import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMobileScreenButton, faClock } from '@fortawesome/free-solid-svg-icons'

import { ContactContainer, ContactElement } from './header-top-contact-details.styles';

const HeaderTopContactDetails: React.FC = () => {
  return (
    <Container>
      <ContactContainer className='d-md-flex justify-content-md-between justify-content-lg-start'>
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

export default HeaderTopContactDetails;
