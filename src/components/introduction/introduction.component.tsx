import { type FC } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from '@emotion/styled'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { z } from 'zod'

import { device } from '../../devices-breakpoints'

// import { type IntroductionDataType } from '../../types/introduction-data-types'
import { IntroductionContent } from './introduction-content/introduction-content.component'
import { IntroductionImages } from './introduction-images/introduction-images.component'
import { IntroductionQuote } from './introduction-quote/introduction-quote.component'
import { NewLineText } from '../new-line-text/new-line-text.component'

const IntroductionData = z.object({
  title: z.string(),
  content: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
      text: z.string(),
    }),
  ),
  images: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
      image: z.string(),
    }),
  ),
  quote: z.object({
    text: z.string(),
    author: z.string(),
  }),
})

type IntroductionData = z.infer<typeof IntroductionData>

const IntroductionContainer = styled(Container)`
  padding-top: 6.25rem;
  padding-bottom: 6.25rem;
`

const IntroductionContentLoading = styled.div`
  font-size: 1.5rem;
  text-align: center;
  font-weight: 900;
  line-height: 1.2em;
  color: var(--bs-primary);
`

const IntroductionContentLoadingError = styled.div`
  font-size: 1.5rem;
  text-align: center;
  font-weight: 900;
  line-height: 1.2em;
  color: var(--bs-red);
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

interface IntroductionLayoutProps {
  data: IntroductionData
}

const IntroductionLayout: FC<IntroductionLayoutProps> = ({ data }) => {
  const { title, content, images, quote } = data
  return (
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
  )
}

export const Introduction = () => {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['introductionData'],
    queryFn: () => axios.get('db/introduction-data.json').then((res) => res.data),
  })

  return (
    <IntroductionContainer>
      {isPending && (
        <IntroductionContentLoading>Introduction Content Loading...</IntroductionContentLoading>
      )}
      {error && (
        <IntroductionContentLoadingError>
          Ooops something went wrong...
        </IntroductionContentLoadingError>
      )}
      {!isPending && !error && <IntroductionLayout data={data} />}
    </IntroductionContainer>
  )
}
