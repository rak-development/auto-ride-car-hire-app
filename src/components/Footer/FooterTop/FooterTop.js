import template from './FooterTop.template'

export class FooterTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template()
  }
}
