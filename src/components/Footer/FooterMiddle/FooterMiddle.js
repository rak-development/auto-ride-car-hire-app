import template from './FooterMiddle.template'

class FooterMiddle {
  constructor () {
    this.el = document.createElement('div')
    this.el.className = 'footer-middle'
  }

  getEl = () => {
    this.render()
    return this.el
  }

  render = () => { this.el.innerHTML = template() }
}

export default FooterMiddle
