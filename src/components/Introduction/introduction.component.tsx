import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from '@emotion/styled'

import { device } from '../../devices-breakpoints'

import INTRODUCTION_DATA from '../../introduction-data.json'

import { IntroductionContent } from './introduction-content/introduction-content-component'

import { IntroductionDataType } from '../../types/introductionDataTypes'

const IntroductionContainer = styled(Container)`
  padding-top: 6.25rem;
  padding-bottom: 6.25rem;
`

const IntroductionRow = styled(Row)`
  margin-bottom: 0.625rem;
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
  const { title, content }: IntroductionDataType = INTRODUCTION_DATA
  const addLineBreak = title.replace(/<br\s*[\/]?>/gi, '\n')
  return (
    <IntroductionContainer>
      <IntroductionRow>
        <Col md={4}>
          <IntroductionTitle>{ addLineBreak }</IntroductionTitle>
        </Col>
        <IntroductionContent content={content} />
      </IntroductionRow>
    </IntroductionContainer>
  )
}
