import template from './Introduction.template'
import styles from './Introduction.module.scss'

export class Introduction extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template(styles)
  }
}
