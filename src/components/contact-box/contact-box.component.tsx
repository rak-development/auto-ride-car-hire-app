import { type FC } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from '@emotion/styled'

import { z } from 'zod'

import { device } from '../../devices-breakpoints'

import { Icon } from '../icon/icon.component'
import { NewLineText } from '../new-line-text/new-line-text.component'
import { ContentLoading } from '../content-loading/content-loading.component'
import { ContentLoadingError } from '../content-loading/content-loading-error/content-loading-error.components'

import { useDataQuery } from '../../helpers/useDataQuery'

const contactBoxDataSchema = z.array(
  z.object({
    title: z.string(),
    icon: z.string(),
    text: z.string()
  })
)

type ContactBoxDataType = z.infer<typeof contactBoxDataSchema>

const ContactBoxWrapper = styled.div`
  display: flex;
  margin-bottom: 2.5rem;
`

const ContactBoxIconSection = styled.section`
  position: relative;

  svg {
    width: 3rem;
    height: 3rem;
    position: absolute;
    z-index: 1;
    top: -0.625rem;
    left: 0;
    padding-right: 0;

    @media ${device.md} {
      left: -0.625rem;
    }
  }
`

const ContactBoxIconBackground = styled.div`
  background-color: var(--bs-white);
  width: 3rem;
  height: 3rem;
  display: block;
  border-radius: 50%;
  position: relative;
  left: 0.625rem;

  @media ${device.md} {
    left: 0;
  }
`

const ContactBoxContentSection = styled.section`
  padding-left: 2.1875rem;
`

const ContactBoxContentTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1.5rem;
  letter-spacing: 0.125rem;
  color: var(--bs-gray-800);
  margin-bottom: 0.625rem;
`

const ContactBoxContentText = styled.div`
  font-size: 1rem;
  font-weight: 700;
  text-transform: none;
  line-height: 1.66rem;
  color: var(--bs-gray-800);

  @media ${device.md} {
    font-size: 1.125rem;
  }
`

interface ContactBoxLayoutProps {
  data: ContactBoxDataType
}

const ContactBoxLayout:FC<ContactBoxLayoutProps> = ({ data }) => 
  (
    <>
      {data.map(({ title, text, icon }) => (
        <Col md={4} key={title}>
          <ContactBoxWrapper>
            <ContactBoxIconSection>
              <Icon icon={icon as Icon} />
              <ContactBoxIconBackground />
            </ContactBoxIconSection>
            <ContactBoxContentSection aria-label={title}>
              <ContactBoxContentTitle>{title}</ContactBoxContentTitle>
              <ContactBoxContentText>
                <NewLineText text={text} />
              </ContactBoxContentText>
            </ContactBoxContentSection>
          </ContactBoxWrapper>
        </Col>
      ))}
    </>
  )


export const ContactBox = () => {
  const { status, data } = useDataQuery('contactBoxData', 'assets/db/contact-box-data.json', contactBoxDataSchema)

  return (
    <Row>
      {status === 'pending' && (
        <ContentLoading text="Contact Box Content Loading..." />
      )}
      {status === 'error' && (
        <ContentLoadingError text="Ooops something went wrong..." />
      )}
      {status === 'success' && <ContactBoxLayout data={data} />}
    </Row>
  )
}
