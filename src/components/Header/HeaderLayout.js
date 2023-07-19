import template from './HeaderLayout.template'

export class HeaderLayout extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template()
  }
}
