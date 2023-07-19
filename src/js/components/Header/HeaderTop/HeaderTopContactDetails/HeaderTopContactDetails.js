import template from './HeaderTopContactDetails.template'
import styles from './HeaderTopContactDetails.module.scss'

class HeaderTopContactDetails extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template(styles)
  }
}

customElements.define('header-top-contact-details', HeaderTopContactDetails)
