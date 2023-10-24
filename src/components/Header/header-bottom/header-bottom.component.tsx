import Container from 'react-bootstrap/Container';

import { HeaderBottomWrapper } from './header-bottom.styles'

export const HeaderBottom: React.FC = () => {
  return (
    <HeaderBottomWrapper>
      <Container>
        <h5 className='mb-0 text-white' role='heading' aria-label='Subheader'>
          BOOK SMART. BOOK EARLY
        </h5>
        <h1 className='mb-0 mt-3 text-white' role='heading' aria-label='Main Header'>
          Better journeys, by AutoRide
        </h1>
        <h2 className='mb-5 text-white' role='heading' aria-label='Second Header'>
          Make the most of your car hire
        </h2>
      </Container>
    </HeaderBottomWrapper>
  )
}
