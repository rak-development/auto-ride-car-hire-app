import template from './HeaderMiddle.template'

class HeaderMiddle {
  constructor () {
    this.el = document.createElement('div')
    this.el.className = 'header-middle'
  }

  getEl = () => {
    this.render()
    return this.el
  }

  render = () => { this.el.innerHTML = template() }
}

export default HeaderMiddle
