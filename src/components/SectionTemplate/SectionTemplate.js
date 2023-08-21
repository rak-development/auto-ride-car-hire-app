import template from './SectionTemplate.template'

const styles = `
  .section-template {
    padding: 6.25rem 0;
  }

  .section-subheader {
    ont-size: 1.125rem;
    color: #FF700A;
    font-family: 'Lato';
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.66666em;
  }

  .section-header {
    font-size: 2.5rem;
    margin-top: 0.625rem;
    color: #2C3E50;
    font-family: 'Lato';
    font-weight: 300;
    line-height: 1.4em;
  }
`
const sheet = new CSSStyleSheet();
sheet.replaceSync(styles);

export class SectionTemplate extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open'});
  }

  connectedCallback() {
    this.render()
  }

  render = () => {
    this.shadowRoot.innerHTML = template(styles)
    this.shadowRoot.adoptedStyleSheets = [sheet];
  }
}
