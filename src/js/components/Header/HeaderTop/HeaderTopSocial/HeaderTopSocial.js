import template from './HeaderTopSocial.template'

class HeaderTopSocial {
  constructor () {
    this.el = document.createElement('div')
  }

  getEl = () => {
    this.render()
    return this.el
  }

  render = () => { this.el.innerHTML = template() }
}

export default HeaderTopSocial
