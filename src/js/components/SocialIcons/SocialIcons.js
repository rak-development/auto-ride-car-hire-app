import template from './SocialIcons.template'

class SocialIcons extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template()
  }
}

customElements.define('social-icons', SocialIcons)
