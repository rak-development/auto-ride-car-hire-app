import template from './SocialIcons.template'
import styles from './SocialIcons.module.scss'

export class SocialIcons extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template(styles)
  }
}
