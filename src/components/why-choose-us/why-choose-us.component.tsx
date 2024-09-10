import { type FC } from 'react'
import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { z } from 'zod'

import { SectionTemplate } from '../section-template/section-template.component'
import { CoreValuesList } from './core-values-list/core-values-list.component'
import { CoreValuesCircles } from './core-values-circles/core-values-circles.component'
import { ContentLoading } from '../content-loading/content-loading.component'
import { ContentLoadingError } from '../content-loading/content-loading-error/content-loading-error.components'
import { type LanguageExtensionTypes } from '../../types/language-extension-types'

const whyChooseUsDataSchema = z.object({
  header: z.string(),
  subheader: z.string(),
  coreValues: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
    }),
  ),
})

export type WhyChooseUsDataType = z.infer<typeof whyChooseUsDataSchema>

interface WhyChooseUsLayoutProps {
  data: WhyChooseUsDataType
}

const WhyChooseUsLayout: FC<WhyChooseUsLayoutProps> = ({ data }) => (
  <Container>
    <CoreValuesCircles {...data} />
    <CoreValuesList {...data} />
  </Container>
)

const useWhyChooseUsDataQuery = (languageExtension: LanguageExtensionTypes) =>
  useQuery({
    queryKey: ['whyChooseUsData', languageExtension],
    queryFn: () =>
      axios
        .get(`assets/db/circle-content-data-${languageExtension}.json`)
        .then((res) => res.data)
        .then((data) => whyChooseUsDataSchema.parse(data)),
  })

export const WhyChooseUs = () => {
  // console.log('why choose us')
  const {
    i18n: { language },
    t,
  } = useTranslation()
  const { status, data } = useWhyChooseUsDataQuery(
    language as LanguageExtensionTypes,
  )
  const isData = status === 'success'
  const subheader = isData && t('whyChooseUsSubheader')
  const header = isData && t('whyChooseUsHeader')

  return (
    <SectionTemplate subheader={subheader} header={header} bgMode='--bs-white'>
      {status === 'pending' && (
        <ContentLoading text={t('contentLoadingWhyChooseUs')} />
      )}
      {status === 'error' && (
        <ContentLoadingError text={t('contentLoadingError')} />
      )}
      {status === 'success' && <WhyChooseUsLayout data={data} />}
    </SectionTemplate>
  )
}
