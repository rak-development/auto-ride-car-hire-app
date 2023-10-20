import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'

import { SocialIcon, SocialLink } from './SocialIcons.styles';

const SocialIcons: React.FC = () => {
  return (
    <div className='
        d-flex 
        justify-content-start 
        justify-content-md-end align-items-center
      '>
        <SocialIcon>
          <SocialLink href='https://www.facebook.com/' target='_blank' aria-label="Facebook Link" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </SocialLink>
        </SocialIcon>
        <SocialIcon className='me-0'>
          <SocialLink href='https://twitter.com/' target='_blank' aria-label="Twitter Link" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </SocialLink>
        </SocialIcon>
      </div>
  )
}

export default SocialIcons;
