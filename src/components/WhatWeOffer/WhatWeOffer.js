import template from './WhatWeOffer.template'

export class WhatWeOffer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = template()
  }
}
