import { type FC } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

import styled from '@emotion/styled'

import { device } from '../../../devices-breakpoints'

import { type IntroductionQuoteType } from '../../../types/introduction-data-types'

const IntroductionQuoteWrapper = styled.div`
  margin-top: 1.875rem;
  text-align: center;
`

const IntroductionQuoteIcon = styled(FontAwesomeIcon)`
  width: 2rem;
  height: 2rem;
  color: var(--bs-primary);
`

const IntroductionQuoteBlockquote = styled.blockquote`
  font-size: 1.1875rem;
  font-weight: 300;
  line-height: 1.42857em;
  margin: 0.625rem auto 0;
  max-width: 43.75rem;

  @media ${device.sm} {
    font-size: 1.5rem;
  }

  @media ${device.xl} {
    font-size: 1.75rem;
  }
`

const IntroductionQuoteAuthor = styled.div`
  font-size: 0.875rem;
  color: var(--bs-gray-800);
  margin-top: 1.875rem;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 2.5em;
  letter-spacing: 0.125rem;
`

interface IntroductionQuoteProps {
  quote: IntroductionQuoteType
}

export const IntroductionQuote: FC<IntroductionQuoteProps> = ({ quote }) => {
  return (
    <Row>
      <Col>
        <IntroductionQuoteWrapper>
          <IntroductionQuoteIcon icon={faQuoteLeft} />
          <IntroductionQuoteBlockquote>{quote.text}</IntroductionQuoteBlockquote>
          <IntroductionQuoteAuthor>{quote.author}</IntroductionQuoteAuthor>
        </IntroductionQuoteWrapper>
      </Col>
    </Row>
  )
}
