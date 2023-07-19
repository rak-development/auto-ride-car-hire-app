import './HeaderTopContactDetails/HeaderTopContactDetails'
import '../../SocialIcons/SocialIcons'

import template from './HeaderTop.template'

class HeaderTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template()
  }
}

customElements.define('header-top', HeaderTop)
