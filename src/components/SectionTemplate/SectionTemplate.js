import template from './SectionTemplate.template'

export class SectionTemplate extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open'});
  }

  connectedCallback() {
    this.render()
  }

  render = () => {
    this.shadowRoot.innerHTML = template()
  }
}
