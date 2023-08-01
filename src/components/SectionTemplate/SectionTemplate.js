import template from './SectionTemplate.template'
import styles from './SectionTemplate.module.scss'

export default class SectionTemplate {
  constructor(sectionData) {
    this.sectionData = sectionData
    this.el = document.createElement('div')
  }

  getEl = () => {
    this.render()
    return this.el
  }

  render = () => { this.el.innerHTML = template(styles, this.sectionData) }
}
