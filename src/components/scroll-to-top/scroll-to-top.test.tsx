import { render, screen, fireEvent } from '../../utils/test-utils'

import { ScrollToTop } from './scroll-to-top.component'

describe('ScrollToTop', async () => {
  it('should render the scroll to top button', () => {
    render(<ScrollToTop />)
    const scrollToTopButton = screen.getByTestId('scroll-to-top')

    fireEvent.click(scrollToTopButton)

    // const scrollToTopButton = screen.getByTestId("scroll-to-top");
    // const scrollToTopButton = <ScrollToTop />;
    // expect(scrollToTopButton).isVisible().toBe(false)
    // expect(scrollToTopButton).visible().toBe(false)


    screen.debug();
  });
});
