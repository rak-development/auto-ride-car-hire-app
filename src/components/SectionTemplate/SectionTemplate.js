import template from './SectionTemplate.template'
import styles from './SectionTemplate.module.scss'

export class SectionTemplate extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open'});
     this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.render()
  }

  render = () => {
    this.innerHTML = template(styles, this.dataset, this.children) 
  }
}
