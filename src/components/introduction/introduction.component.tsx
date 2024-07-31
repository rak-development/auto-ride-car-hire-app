import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from '@emotion/styled'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { z } from 'zod'

import { device } from '../../devices-breakpoints'

import { IntroductionContent } from './introduction-content/introduction-content.component'
import { IntroductionImages } from './introduction-images/introduction-images.component'
import { IntroductionQuote } from './introduction-quote/introduction-quote.component'
import { NewLineText } from '../new-line-text/new-line-text.component'
import { ContentLoading } from '../content-loading/content-loading.component'
import { ContentLoadingError } from '../content-loading/content-loading-error/content-loading-error.components'
import { type LanguageExtensionTypes } from '../../types/language-extension-types'

const introductionDataSchema = z.object({
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

type IntroductionDataType = z.infer<typeof introductionDataSchema>

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

interface IntroductionLayoutProps {
  data: IntroductionDataType
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

const useIntroductionDataQuery = (languageExtension: LanguageExtensionTypes) =>
  useQuery({
    queryKey: ['introductionData', languageExtension],
    queryFn: () =>
      axios
        .get(`assets/db/introduction-data-${languageExtension}.json`)
        .then((res) => res.data)
        .then((data) => introductionDataSchema.parse(data)),
  })

export const Introduction = () => {
  const {
    i18n: { language },
    t,
  } = useTranslation()
  const { status, data } = useIntroductionDataQuery(language as LanguageExtensionTypes)
  return (
    <IntroductionContainer>
      {status === 'pending' && <ContentLoading text={t('contentLoadingIntroduction')} />}
      {status === 'error' && <ContentLoadingError text={t('contentLoadingError')} />}
      {status === 'success' && <IntroductionLayout data={data} />}
    </IntroductionContainer>
  )
}
