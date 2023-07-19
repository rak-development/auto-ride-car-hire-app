import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import './global-styles/Base.scss'

import { AppLayout } from './components/AppLayout/AppLayout'
import { HeaderLayout } from './components/Header/HeaderLayout'
import { HeaderTop } from './components/Header/HeaderTop/HeaderTop'
import { HeaderTopContactDetails } from './components/Header/HeaderTop/HeaderTopContactDetails/HeaderTopContactDetails'

customElements.define('app-layout', AppLayout)
customElements.define('header-layout', HeaderLayout)
customElements.define('header-top', HeaderTop)
customElements.define('header-top-contact-details', HeaderTopContactDetails)
