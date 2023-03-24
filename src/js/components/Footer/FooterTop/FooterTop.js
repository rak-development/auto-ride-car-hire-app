import template from './FooterTop.template'

class FooterTop {
  constructor () {
    this.el = document.createElement('div')
    this.el.className = 'footer-top'
  }

  getEl = () => {
    this.render()
    return this.el
  }

  render = () => { this.el.innerHTML = template() }
}

export default FooterTop
