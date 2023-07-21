import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import './global-styles/Base.scss'

import { AppLayout } from './components/AppLayout/AppLayout'
import { HeaderLayout } from './components/Header/HeaderLayout'
import { HeaderTop } from './components/Header/HeaderTop/HeaderTop'
import { HeaderTopContactDetails } from './components/Header/HeaderTop/HeaderTopContactDetails/HeaderTopContactDetails'
import { HeaderMiddle } from './components/Header/HeaderMiddle/HeaderMiddle'
import { HeaderBottom } from './components/Header/HeaderBottom/HeaderBottom'
import { FooterLayout } from './components/Footer/FooterLayout'
import { FooterTop } from './components/Footer/FooterTop/FooterTop'
import { FooterMiddle } from './components/Footer/FooterMiddle/FooterMiddle'
import { FooterBottom } from './components/Footer/FooterBottom/FooterBottom'
import { SocialIcons } from './components/SocialIcons/SocialIcons'
import { BookingReservation } from './components/BookingReservation/BookingReservation'

customElements.define('app-layout', AppLayout)
customElements.define('header-layout', HeaderLayout)
customElements.define('header-top', HeaderTop)
customElements.define('header-top-contact-details', HeaderTopContactDetails)
customElements.define('header-middle', HeaderMiddle)
customElements.define('header-bottom', HeaderBottom)
customElements.define('footer-layout', FooterLayout)
customElements.define('footer-top', FooterTop)
customElements.define('footer-middle', FooterMiddle)
customElements.define('footer-bottom', FooterBottom)
customElements.define('social-icons', SocialIcons)
customElements.define('booking-reservation', BookingReservation)
