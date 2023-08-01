import template from './HeaderMiddle.template'
import styles from './HeaderMiddle.module.scss'

export class HeaderMiddle extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template(styles)
  }
}
