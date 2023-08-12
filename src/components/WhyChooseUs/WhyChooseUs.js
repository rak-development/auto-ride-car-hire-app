import template from './WhyChooseUs.template'
import styles from './WhyChooseUs.module.scss'

export class WhyChooseUs extends HTMLElement {
  constructor() {
    super();

    this.sectionData = {
      bgMode: 'bg-white',
      subheader: 'Why Choose Us',
      header: 'Proudly Serving the Oakland Area Since 2007'
    }
  }

  connectedCallback() {
    this.innerHTML = template(styles, this.sectionData)
  }
}
