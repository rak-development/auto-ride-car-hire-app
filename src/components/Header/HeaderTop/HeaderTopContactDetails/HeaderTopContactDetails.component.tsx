import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMobileScreenButton, faClock } from '@fortawesome/free-solid-svg-icons'

import { ContactContainer, ContactElement } from './HeaderTopContactDetails.styles';

const HeaderTopContactDetails: React.FC = () => {
  return (
    <div className='container'>
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
    </div>
  )
}

export default HeaderTopContactDetails;
