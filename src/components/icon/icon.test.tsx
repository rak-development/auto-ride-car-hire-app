import { render, screen, userEvent } from '../../utils/test-utils'
import { Icon } from './icon.component'

describe('Icon', async () => {
  it('should render the icon', () => {
    render(<Icon icon={'fa-quote-left' as const} />)
    screen.debug();
  });

  it('should not render the icon', () => {
    render(<Icon icon={'fa' as const} />)
    screen.debug();
  });
});
