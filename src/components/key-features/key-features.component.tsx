import { type FC } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useTranslation } from 'react-i18next'

import styled from '@emotion/styled'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { z } from 'zod'

import { SectionTemplate } from '../section-template/section-template.component'

import { device } from '../../devices-breakpoints'
import { Icon } from '../icon/icon.component'
import { ContentLoading } from '../content-loading/content-loading.component'
import { ContentLoadingError } from '../content-loading/content-loading-error/content-loading-error.components'
import { type LanguageExtensionTypes } from '../../types/language-extension-types'

const keyFeaturesDataSchema = z.array(
  z.object({
    id: z.number(),
    icon: z.string(),
    header: z.string(),
    body: z.string(),
  }),
)

type KeyFeaturesDataType = z.infer<typeof keyFeaturesDataSchema>
type KeyFeaturesSectionProps = {
  $isData: boolean
}

const KeyFeaturesSection = styled.section<KeyFeaturesSectionProps>`
  padding-top: ${({ $isData }) => ($isData ? '6.875rem' : '0')};
  text-align: center;
`

const KeyFeatureContainer = styled.div`
  margin-bottom: 2.8125rem;

  @media ${device.lg} {
    padding-left: 1.875rem;
    padding-right: 1.875rem;
    margin-bottom: 2.8125rem;
  }
`

const KeyFeatureIconContainer = styled.div`
  position: relative;
  display: inline-block;

  svg {
    color: var(--bs-primary);
    width: 3rem;
    height: 3rem;
    position: absolute;
    z-index: 2;
    top: -0.625rem;
    left: -0.625rem;
  }

  span {
    background-color: var(--bs-gray-200);
    z-index: 1;
    width: 3rem;
    height: 3rem;
    display: block;
    border-radius: 50%;
  }
`

const KeyFeatureHeader = styled.div`
  font-size: 1rem;
  font-weight: 700;
  text-transform: none;
  line-height: 1.66rem;
  margin-top: 1.875rem;
  margin-bottom: 0.9375rem;
  color: var(--bs-gray-800);

  @media ${device.lg} {
    font-size: 1.125rem;
  }
`

const KeyFeatureBody = styled.div`
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.875rem;
  color: var(--bs-gray-700);
`

const useKeyFeaturesDataQuery = (languageExtension: LanguageExtensionTypes) =>
  useQuery({
    queryKey: ['keyFeaturesData', languageExtension],
    queryFn: () =>
      axios
        .get(`assets/db/key-features-data-${languageExtension}.json`)
        .then((res) => res.data)
        .then((data) => keyFeaturesDataSchema.parse(data)),
  })

interface KeyFeaturesDataTemplateProps {
  data: KeyFeaturesDataType
}

const KeyFeaturesDataTemplate: FC<KeyFeaturesDataTemplateProps> = ({
  data,
}) => (
  <Row>
    {data.map(({ id, icon, header, body }) => (
      <Col md={3} key={id}>
        <KeyFeatureContainer>
          <KeyFeatureIconContainer>
            <Icon icon={icon as Icon} />
            <span />
          </KeyFeatureIconContainer>
          <KeyFeatureHeader>{header}</KeyFeatureHeader>
          <KeyFeatureBody>{body}</KeyFeatureBody>
        </KeyFeatureContainer>
      </Col>
    ))}
  </Row>
)

export const KeyFeatures = () => {
  const {
    i18n: { language },
    t,
  } = useTranslation()
  const { status, data } = useKeyFeaturesDataQuery(
    language as LanguageExtensionTypes,
  )
  const isData = status === 'success'
  const subheader = isData && t('keyFeaturesSubheader')
  const header = isData && t('keyFeaturesHeader')

  return (
    <SectionTemplate subheader={subheader} header={header} bgMode='--bs-white'>
      <KeyFeaturesSection $isData={isData}>
        <Container>
          {status === 'pending' && (
            <ContentLoading text='Key Features Content Loading...' />
          )}
          {status === 'error' && (
            <ContentLoadingError text='Ooops something went wrong...' />
          )}
          {status === 'success' && <KeyFeaturesDataTemplate data={data} />}
        </Container>
      </KeyFeaturesSection>
    </SectionTemplate>
  )
}
