import userEvent from '@testing-library/user-event'
import { render, screen, fireEvent } from '../../utils/test-utils'
import { vi } from 'vitest'

import { ScrollToTop } from './scroll-to-top.component'

const wait = () => new Promise((res) => setTimeout(res, 10))

describe('ScrollToTop', () => {
  it('should not render the scroll to top button when scrollY < 2000', async () => {
    render(<ScrollToTop />)

    fireEvent.scroll(window, { target: { scrollY: 1999 } })
    await wait()
    expect(
      screen.queryByRole('button', { name: 'Go to top' }),
    ).not.toBeInTheDocument()
  })

  it('should render the scroll to top button when scrollY > 2000', async () => {
    const scrollTo = vi.fn()
    vi.spyOn(window, 'scrollTo').mockImplementation(scrollTo)

    const user = userEvent.setup()
    render(<ScrollToTop />)

    fireEvent.scroll(window, { target: { scrollY: 3000 } })
    await user.click(await screen.findByRole('button', { name: 'Go to top' }))

    expect(scrollTo).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  })

  it('should not render the scroll after scrolling to top', async () => {
    render(<ScrollToTop />)
    expect(
      screen.queryByRole('button', { name: 'Go to top' }),
    ).not.toBeInTheDocument()
  })
})
