import template from './HeaderTopContactDetails.template'
import styles from './HeaderTopContactDetails.module.scss'

export class HeaderTopContactDetails extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template(styles)
  }
}
