import template from './KeyFeatures.template';
import styles from './KeyFeatures.module.scss';

export class KeyFeatures extends HTMLElement {
  constructor() {
    super();

    this.keyFeaturesData = [
      {
        icon: 'fa-solid fa-car',
        header: 'Safety First',
        body: 'Experienced staff and professionally trained chauffeurs'
      },
      {
        icon: 'fa-solid fa-coins',
        header: 'Reasonable Rates',
        body: 'We can offer you the right vehicle at the right price to fit your budget'
      },
      {
        icon: 'fa-solid fa-bus',
        header: 'Largest Fleet',
        body: 'We offer an extensive fleet of vehicles including sedans, limousines and coach buses'
      },
      {
        icon: 'fa-solid fa-road-circle-exclamation',
        header: 'Nationwide Service',
        body: 'We provide our transportation services nationwide'
      }
    ]

    this.sectionData = {
      bgMode: 'bg-white',
      subheader: 'Key Features',
      header: 'Make Your Trip Your Way With Us',
      sectionContent: template(styles, this.keyFeaturesData)
    }
  }

  connectedCallback() {
    const { subheader, header, sectionContent } = this.sectionData;
    this.innerHTML = `
      <section-template>
        <div class='container text-center' slot="subheader">${subheader}</div>
        <div class='container text-center' slot="header">${header}</div>
        <div class='container' slot='content'>${sectionContent}</div>
      </section-template>
    `;
  }
}
