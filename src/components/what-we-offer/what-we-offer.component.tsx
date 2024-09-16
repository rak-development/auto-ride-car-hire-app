import { type FC } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { useTranslation } from 'react-i18next'

import styled from '@emotion/styled'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { z } from 'zod'

import { SectionTemplate } from '../section-template/section-template.component'

import { device } from '../../devices-breakpoints'
import { ContentLoading } from '../content-loading/content-loading.component'
import { ContentLoadingError } from '../content-loading/content-loading-error/content-loading-error.components'
import { type LanguageExtensionTypes } from '../../types/language-extension-types'

const whatWeOfferDataSchema = z.array(
  z.object({
    id: z.number(),
    colSize: z.number(),
    title: z.string(),
    image: z.string(),
  }),
)

type WhatWeOfferDataType = z.infer<typeof whatWeOfferDataSchema>

const WhatWeOfferContainer = styled(Container)`
  margin-top: 5rem;
`

const WhatWeOfferRow = styled(Row)`
  --bs-gutter-y: 1.5rem;
  --bs-gutter-x: 1.5rem;
`

const WhatWeOfferCard = styled(Card)`
  color: var(--bs-white);
  border-radius: 0;
  border: none;
`

const WhatWeOfferImage = styled(Card.Img)`
  height: 17.1875rem;
  object-fit: cover;
  object-position: center;
  border-radius: 0;
`

const WhatWeOfferOverlay = styled(Card.ImgOverlay)`
  height: 17.1875rem;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 0;
  display: flex;
  align-items: flex-end;
`

const WhatWeOfferCardTitle = styled(Card.Title)`
  font-size: 1rem;
  text-transform: uppercase;
  text-align: left;
  position: relative;

  &:before {
    content: '';
    width: 1.875rem;
    height: 0.0625rem;
    background: var(--bs-white);
    top: -0.625rem;
    position: absolute;
  }

  @media ${device.lg} {
    font-size: 1.125rem;
  }
`

const useWhatWeOfferDataQuery = (languageExtension: LanguageExtensionTypes) =>
  useQuery({
    queryKey: ['whatWeOfferData', languageExtension],
    queryFn: () =>
      axios
        .get(`assets/db/what-we-offer-data-${languageExtension}.json`)
        .then((res) => res.data)
        .then((data) => whatWeOfferDataSchema.parse(data)),
  })

interface WhatWeOfferDataTemplateProps {
  data: WhatWeOfferDataType
}

const WhatWeOfferDataTemplate: FC<WhatWeOfferDataTemplateProps> = ({
  data,
}) => {
  return (
    <WhatWeOfferRow>
      {data.map(({ id, colSize, title, image }) => (
        <Col md={colSize} key={id}>
          <WhatWeOfferCard bg={'dark'}>
            <WhatWeOfferImage variant='top' src={image} alt={title} />
            <WhatWeOfferOverlay>
              <WhatWeOfferCardTitle>{title}</WhatWeOfferCardTitle>
            </WhatWeOfferOverlay>
          </WhatWeOfferCard>
        </Col>
      ))}
    </WhatWeOfferRow>
  )
}

export const WhatWeOffer = () => {
  const {
    i18n: { language },
    t,
  } = useTranslation()
  const { status, data } = useWhatWeOfferDataQuery(
    language as LanguageExtensionTypes,
  )
  const isData = status === 'success'
  const subheader = isData && t('whatWeOfferSubheader')
  const header = isData && t('whatWeOfferHeader')

  return (
    <SectionTemplate
      subheader={subheader}
      header={header}
      bgMode='--bs-gray-100'>
      <WhatWeOfferContainer>
        {status === 'pending' && (
          <ContentLoading text={t('contentLoadingWhatWeOffer')} />
        )}
        {status === 'error' && (
          <ContentLoadingError text={t('contentLoadingError')} />
        )}
        {status === 'success' && <WhatWeOfferDataTemplate data={data} />}
      </WhatWeOfferContainer>
    </SectionTemplate>
  )
}
