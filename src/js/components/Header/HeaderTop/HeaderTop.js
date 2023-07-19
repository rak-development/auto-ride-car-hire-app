import './HeaderTopContactDetails/HeaderTopContactDetails'
import '../../SocialIcons/SocialIcons'

import template from './HeaderTop.template'
import styles from './HeaderTop.module.scss'

class HeaderTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template(styles)
  }
}

customElements.define('header-top', HeaderTop)
