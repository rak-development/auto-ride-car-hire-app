import { type FC, type ReactNode } from 'react'
import Container from 'react-bootstrap/Container'

import styled from '@emotion/styled'

import { device } from '../../devices-breakpoints'

type bgModeType = '--bs-gray-100' | '--bs-white' | '--bs-what-we-offer-bg-color' | '--bs-why-choose-us-bg-color' | '--bs-key-features-bg-color' | '--bs-our-fleet-bg-color'

type SectionTemplateSectionProps = {
  bgMode: bgModeType
}

const SectionTemplateSection = styled.section<SectionTemplateSectionProps>`
  padding: 6.25rem 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${({ bgMode }) => `var(${bgMode})`};
`

const SectionTemplateContainer = styled(Container)`
  text-align: center;
`

const SectionTemplateSubheader = styled.p`
  font-size: 1rem;
  color: var(--bs-primary);
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.66666em;
  margin-bottom: 0;

  @media ${device.lg} {
    font-size: 1.125rem;
  }
`

const SectionTemplateHeader = styled.p`
  font-size: 1.75rem;
  margin-top: 0.625rem;
  color: var(--bs-section-template-header-color);
  font-weight: 300;
  margin-bottom: 0;

  @media ${device.md} {
    font-size: 2.25rem;
  }

  @media ${device.lg} {
    font-size: 2.5rem;
  }
`

interface SectionTemplateProps {
  subheader: ReactNode
  header: ReactNode
  bgMode: bgModeType
  children: ReactNode
}

export const SectionTemplate: FC<SectionTemplateProps> = ({
  subheader,
  header,
  bgMode,
  children,
}) => (
  <SectionTemplateSection bgMode={bgMode}>
    <SectionTemplateContainer>
      <SectionTemplateSubheader>{subheader}</SectionTemplateSubheader>
      <SectionTemplateHeader>{header}</SectionTemplateHeader>
    </SectionTemplateContainer>
    {children}
  </SectionTemplateSection>
)
