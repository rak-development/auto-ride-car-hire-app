import { render, screen, fireEvent } from '../../utils/test-utils'
import { vi } from 'vitest'

import { ScrollToTop } from './scroll-to-top.component'

describe('ScrollToTop', () => {

  vi.spyOn(window, 'scrollTo').mockImplementation(() => {})

  it('should render the scroll to top button', () => {
    render(<ScrollToTop />)
    const scrollToTopButton = screen.getByRole('button', { name: 'Scroll to top'})

    fireEvent.click(scrollToTopButton)

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, left: 0, behavior: 'smooth' })

    // const scrollToTopButton = screen.getByTestId("scroll-to-top");
    // const scrollToTopButton = <ScrollToTop />;
    // expect(scrollToTopButton).isVisible().toBe(false)
    // expect(scrollToTopButton).visible().toBe(false)
  });
});
