import template from './ContactBox.template'
import styles from './ContactBox.module.scss'

export class ContactBox extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template(styles)
  }
}
