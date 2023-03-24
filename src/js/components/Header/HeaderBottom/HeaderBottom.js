import template from './HeaderBottom.template'

class HeaderBottom {
  constructor () {
    this.el = document.createElement('div')
    this.el.className = 'header-bottom'
  }

  getEl = () => {
    this.render()
    return this.el
  }

  render = () => { this.el.innerHTML = template() }
}

export default HeaderBottom
