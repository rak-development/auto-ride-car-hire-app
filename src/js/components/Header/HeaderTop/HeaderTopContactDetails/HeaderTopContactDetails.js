import template from './HeaderTopContactDetails.template'

class HeaderTopContactDetails extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template()
  }
}

customElements.define('header-top-contact-details', HeaderTopContactDetails)
