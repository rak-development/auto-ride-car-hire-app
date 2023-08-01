import template from './HeaderBottom.template'
import styles from './HeaderBottom.module.scss'

export class HeaderBottom extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template(styles)
  }
}
