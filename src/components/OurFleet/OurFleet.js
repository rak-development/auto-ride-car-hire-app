import template from './OurFleet.template'
import styles from './OurFleet.module.scss'

export class OurFleet extends HTMLElement {

  connectedCallback() {
    this.innerHTML = template(styles, this.sectionData)
  }
}
