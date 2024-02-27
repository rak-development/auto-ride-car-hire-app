import { type FC } from 'react'
import Container from 'react-bootstrap/Container'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { z } from 'zod'

import { SectionTemplate } from '../section-template/section-template.component'
import { CoreValuesList } from './core-values-list/core-values-list.component'
import { CoreValuesCircles } from './core-values-circles/core-values-circles.component'
import { ContentLoading } from '../content-loading/content-loading.component'
import { ContentLoadingError } from '../content-loading/content-loading-error/content-loading-error.components'

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

const useWhyChooseUsDataQuery = () =>
  useQuery({
    queryKey: ['whyChooseUsData'],
    queryFn: () =>
      axios
        .get('assets/db/circle-content-data.json')
        .then((res) => res.data)
        .then((data) => whyChooseUsDataSchema.parse(data)),
  })

export const WhyChooseUs = () => {
  const { status, data } = useWhyChooseUsDataQuery()
  return (
    <SectionTemplate
      subheader='Why Choose Us'
      header='Proudly Serving the Oakland Area Since 2007'
      bgMode='--bs-white'
    >
      {status === 'pending' && <ContentLoading text='Introduction Content Loading...' />}
      {status === 'error' && <ContentLoadingError text='Ooops something went wrong...' />}
      {status === 'success' && <WhyChooseUsLayout data={data} />}
    </SectionTemplate>
  )
}
