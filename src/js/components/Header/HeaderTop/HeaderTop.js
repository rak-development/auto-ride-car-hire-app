import './HeaderTopContactDetails/HeaderTopContactDetails'
import '../../SocialIcons/SocialIcons'

class HeaderTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class='header-top bg-light'>
        <div class='container d-flex justify-content-between align-items-center'>
          <header-top-contact-details></header-top-contact-details>
          <social-icons></social-icons>
        </div>
      </div>
    `
  }
}

customElements.define('header-top', HeaderTop)