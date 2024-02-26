import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'

import styled from '@emotion/styled'

import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ScrollToTopButton = styled(Button)`
  position: fixed;
  right: 1.875rem;
  width: 3rem;
  height: 3rem;
  bottom: 9.6875rem;
  border-radius: 50%;
  background-color: rgba(133, 140, 146, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;

  svg {
    width: 1.375rem;
    height: 1.375rem;
  }

  &:hover,
  &:active {
    background-color: rgba(133, 140, 146, 0.6);
  }
`

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const scrollToTopHandler = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })

  useEffect(() => {
    const listenToScroll = () => {
      const heightToHideFrom = 2000
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      setIsVisible(winScroll > heightToHideFrom)
    }
    window.addEventListener('scroll', listenToScroll)
    return () => window.removeEventListener('scroll', listenToScroll)
  }, [])


  return (
    <>
      {isVisible &&  <ScrollToTopButton type='button' onClick={scrollToTopHandler}>
        <FontAwesomeIcon icon={faChevronUp} />
      </ScrollToTopButton>}
    </>
  )
}
