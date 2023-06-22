import template from './BookingReservation.template'
import styles from './BookingReservation.module.scss'

class BookingReservation {
  constructor () {
    this.el = document.createElement('div')
    this.el.className = 'header-middle'
  }

  getEl = () => {
    this.render()
    return this.el
  }

  render = () => { this.el.innerHTML = template(styles) }
}

export default BookingReservation
