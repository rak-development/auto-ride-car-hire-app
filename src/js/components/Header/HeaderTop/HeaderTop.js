import template from './HeaderTop.template'

class HeaderTop {
  constructor () {
    this.el = document.createElement('div')
    this.el.className = 'header-top'
  }

  getEl = () => {
    this.render()
    return this.el
  }

  render = () => { this.el.innerHTML = template() }
}

export default HeaderTop
