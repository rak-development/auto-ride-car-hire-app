import template from './SectionTemplate.template'
import styles from './SectionTemplate.module.scss'

export class SectionTemplate extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render()
  }

  render = () => {
    this.innerHTML = template(styles, this.dataset, this.children) }
}
