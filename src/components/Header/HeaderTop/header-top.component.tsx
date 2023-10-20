import HeaderTopContactDetails from "./HeaderTopContactDetails/header-top-contact-details.component";
import SocialIcons from "../../SocialIcons/SocialIcons.components";

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
