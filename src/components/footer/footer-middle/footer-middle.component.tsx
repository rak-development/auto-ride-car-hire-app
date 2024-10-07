import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'

import { z } from 'zod'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { LogoGrey } from '../../logo-grey/logo-grey.component'
import { FooterMiddleList } from './footer-middle-list/footer-middle-list.component'

import { ContentLoading } from '../../content-loading/content-loading.component'
import { ContentLoadingError } from '../../content-loading/content-loading-error/content-loading-error.components'
import { type LanguageExtensionTypes } from '../../../types/language-extension-types'

const servicesListDataSchema = z.array(
  z.object({
    type: z.literal('service-data'),
    text: z.string(),
  }),
)

const contactListDataSchema = z.array(
  z.object({
    type: z.literal('contact-data'),
    text: z.string(),
    icon: z.string(),
  }),
)

export type ServicesListDataType = z.infer<typeof servicesListDataSchema>
export type ContactListDataType = z.infer<typeof contactListDataSchema>

const FooterMiddleWrapper = styled.div`
  background-color: var(--bs-gray-200);
`

const ContentBox = styled.div`
  color: var(--bs-footer-middle-content-box-text-color);
  margin-bottom: 2.5rem;

  p {
    margin: 0;
    padding: 0.625rem 0;

    &:first-of-type {
      padding-top: 0;
    }
  }
`
const TitleBox = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1.5rem;
  color: var(--bs-footer-middle-content-box-title-color);
  margin-bottom: 1.875rem;

  span {
    height: 0.0625rem;
    width: 3.125rem;
    display: block;
    margin-top: 0.625rem;
    background-color: var(--bs-primary);
  }
`

const useServicesListDataQuery = (languageExtension: LanguageExtensionTypes) =>
  useQuery({
    queryKey: ['servicesListData', languageExtension],
    queryFn: () =>
      axios
        .get(`assets/db/services-list-data-${languageExtension}.json`)
        .then((res) => res.data)
        .then((data) => servicesListDataSchema.parse(data)),
  })

const ServicesListTemplate = () => {
  const {
    i18n: { language },
    t,
  } = useTranslation()
  const { status, data } = useServicesListDataQuery(
    language as LanguageExtensionTypes,
  )
  return (
    <>
      {status === 'pending' && (
        <ContentLoading text={t('contentLoadingServicesList')} />
      )}
      {status === 'error' && (
        <ContentLoadingError text={t('contentLoadingError')} />
      )}
      {status === 'success' && <FooterMiddleList data={data} />}
    </>
  )
}

const useContactListDataQuery = () =>
  useQuery({
    queryKey: ['contactListData'],
    queryFn: () =>
      axios
        .get('assets/db/contact-list-data.json')
        .then((res) => res.data)
        .then((data) => contactListDataSchema.parse(data)),
  })

const ContactListTemplate = () => {
  const { t } = useTranslation()
  const { status, data } = useContactListDataQuery()
  return (
    <>
      {status === 'pending' && (
        <ContentLoading text={t('contentLoadingContactList')} />
      )}
      {status === 'error' && (
        <ContentLoadingError text={t('contentLoadingError')} />
      )}
      {status === 'success' && <FooterMiddleList data={data} />}
    </>
  )
}

export const FooterMiddle = () => {
  const { t } = useTranslation()
  return (
    <FooterMiddleWrapper>
      <Container>
        <Row>
          <Col md={4}>
            <ContentBox>
              <TitleBox>
                {t('about')}
                <span />
              </TitleBox>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                sodales libero et varius commodo. Phasellus tristique magna sit
                amet aliquet mollis.
              </p>
              <p>
                <LogoGrey />
              </p>
            </ContentBox>
          </Col>
          <Col md={4}>
            <ContentBox>
              <TitleBox>
                {t('ourServices')}
                <span />
              </TitleBox>
              <ServicesListTemplate />
            </ContentBox>
          </Col>
          <Col md={4}>
            <ContentBox>
              <TitleBox>
                Autoride
                <span />
              </TitleBox>
              <ContactListTemplate />
            </ContentBox>
          </Col>
        </Row>
      </Container>
    </FooterMiddleWrapper>
  )
}
