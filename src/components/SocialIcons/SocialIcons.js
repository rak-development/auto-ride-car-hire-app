import template from './SocialIcons.template'
import styles from './SocialIcons.module.scss'

class SocialIcons extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template(styles)
  }
}

customElements.define('social-icons', SocialIcons)
