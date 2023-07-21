import template from './FooterMiddle.template'

export class FooterMiddle extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template()
  }
}
