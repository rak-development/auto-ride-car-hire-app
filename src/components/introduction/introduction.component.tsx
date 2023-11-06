import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from '@emotion/styled'

import { device } from '../../devices-breakpoints'

import INTRODUCTION_DATA from '../../introduction-data.json'

import { type IntroductionDataType } from '../../types/introduction-data-types'
import { IntroductionContent } from './introduction-content/introduction-content.component'
import { IntroductionImages } from './introduction-images/introduction-images.component'
import { IntroductionQuote } from './introduction-quote/introduction-quote.component'
import { NewLineText } from '../new-line-text/new-line-text.component'

const IntroductionContainer = styled(Container)`
  padding-top: 6.25rem;
  padding-bottom: 6.25rem;
`

const IntroductionRow = styled(Row)`
  margin-bottom: 0.625rem;
`

const IntroductionCol = styled(Col)`
  margin-bottom: 2.5rem;
`

const IntroductionTitle = styled.h1`
  font-size: 1.5rem;
  text-align: left;
  font-weight: 900;
  line-height: 1.2em;
  color: var(--bs-primary);

  @media ${device.md} {
    font-size: 2.875rem;
  }

  @media ${device.lg} {
    font-size: 3.125rem;
  }
`

export const Introduction = () => {
  const { title, content, images, quote }: IntroductionDataType = INTRODUCTION_DATA
  return (
    <IntroductionContainer>
      <IntroductionRow>
        <IntroductionCol md={4}>
          <IntroductionTitle>
            <NewLineText text={title} />
          </IntroductionTitle>
        </IntroductionCol>
        <IntroductionContent content={content} />
        <IntroductionImages images={images} />
        <IntroductionQuote quote={quote} />
      </IntroductionRow>
    </IntroductionContainer>
  )
}
