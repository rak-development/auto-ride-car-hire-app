import styled from '@emotion/styled'
import React from 'react';
import Col from 'react-bootstrap/Col'

import { IntroductionContentType } from '../../../types/introductionDataTypes'

const IntroductionContentCol = styled(Col)`
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.66666;
  color: var(--bs--gray-700);
  margin-bottom: 0.625rem;
`

const IntroductionContentTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5em;
  color: var(--bs--gray-800);
  margin-bottom: 1.875rem;
`

interface IntroductionContentProps {
  content: IntroductionContentType[];
}

export const IntroductionContent: React.FC<IntroductionContentProps> = ({ content }) => {
  return (
    <>
      {content.map(({ title, text }: IntroductionContentType) => {
        const colSize = content.length === 1 ? 8 : 4 
        return (
          <IntroductionContentCol md={colSize} key={title}>
            <IntroductionContentTitle>{title}</IntroductionContentTitle>
            <div>{text}</div>
          </IntroductionContentCol>
        )
      })}
    </>
  )
}
