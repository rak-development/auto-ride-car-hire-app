import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next'

import styled from '@emotion/styled'

import bannerSrc from './../../../assets/images/AutoRide-Banner.jpeg'

import { BookingReservation } from '../../booking-reservation/booking-reservation.component'

const HeaderBottomBanner = styled.div`
  padding-top: 7.5rem;
  padding-bottom: 7.5rem;
  background-image: url(${bannerSrc});
  background-repeat: no-repeat;
  background-size: cover;
`

const HeaderBottomContainer = styled(Container)`
  color: var(--bs-white);
  display: flex;
  flex-direction: column;
`

const MainHeader = styled.h1`
  margin-top: 1rem;
  margin-bottom: 0;
  order: 1;
`

const SecondHeader = styled.h2`
  margin-bottom: 3rem;
  order: 2;
`

const SubHeader = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0;
  order: 0;
`

const BookingReservationComponent = styled.div`
  order: 3;
`

export const HeaderBottom = () => {
  const { t } = useTranslation()

  return (
    <HeaderBottomBanner>
      <HeaderBottomContainer>
        <MainHeader>{t('mainHeader')}</MainHeader>
        <SecondHeader>{t('secondHeader')}</SecondHeader>
        <SubHeader>{t('subHeader')}</SubHeader>
        <BookingReservationComponent>
          <BookingReservation />
        </BookingReservationComponent>
      </HeaderBottomContainer>
    </HeaderBottomBanner>
  )
}
