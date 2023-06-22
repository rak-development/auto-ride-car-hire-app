import BookingReservation from '../../BookingReservation/BookingReservation'

import template from './HeaderBottom.template'
import styles from './HeaderBottom.module.scss'

class HeaderBottom {
  constructor () {
    this.el = document.createElement('div')
    this.BookingReservation = new BookingReservation()
    this.el.className = 'header-bottom'
  }

  getEl = () => {
    this.render()
    return this.el
  }

  render = () => { this.el.innerHTML = template(styles, this.BookingReservation.getEl()) }
}

export default HeaderBottom
