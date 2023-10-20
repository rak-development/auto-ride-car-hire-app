import HeaderTopContactDetails from "./header-top-contact-details/header-top-contact-details.component";
import SocialIcons from "../../social-icons/social-icons.components";

import { HeaderTopContainer } from "./header-top.styles";

const HeaderTop: React.FC = () => {
  return (
    <div className='header-top bg-light'>
      <HeaderTopContainer
        className="container d-md-flex justify-content-md-between align-items-md-center">
        <HeaderTopContactDetails />
        <SocialIcons />
      </HeaderTopContainer>
    </div>
  )
}

export default HeaderTop;
