import template from './HeaderTop.template'
import styles from './HeaderTop.module.scss'

export class HeaderTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template(styles)
  }
}
