import template from './FooterBottom.template'

class FooterBottom {
  constructor () {
    this.el = document.createElement('div')
    this.el.className = 'footer-bottom'
  }

  getEl = () => {
    this.render()
    return this.el
  }

  render = () => { this.el.innerHTML = template() }
}

export default FooterBottom
