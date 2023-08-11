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
    // const { bgMode, subheader, header } = this.sectionData;
    // this.innerHTML = `
    //   <section-template 
    //     data-bgMode='${bgMode}'
    //     data-subheader='${subheader}'
    //     data-header='${header}'>
    //       <div></div>
    //       <div slot="content"><b>Email:</b> lcrystal34@gmail.com</div>
    //   </section-template>
    // `;
    // this.innerHTML = `
    //   <employee-card name="Leah Crystal" avatar=image.png></employee-card>
    //   <div slot="id"><b>ID:</b> 238</div>
    //   <div slot="job title"><b>Job Title:</b> Database Administrator</div>
    //   <div slot="email"><b>Email:</b> lcrystal34@gmail.com</div>
    //   <div slot="phone"><b>Phone:</b> 292-856-410</div>
    // `;
    this.innerHTML = `
      <section-template>
        <div>
          <div slot="subheader"><b>ID:</b> 238</div>
        </div>
        </section-template>
    `;
  }
}
