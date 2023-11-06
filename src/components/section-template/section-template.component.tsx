import React from 'react'
import Container from 'react-bootstrap/Container'

import styled from '@emotion/styled'

import { device } from '../../devices-breakpoints'

type sectionTemplateProps = {
  bgMode: string
}

const SectionTemplateSection = styled.section<sectionTemplateProps>`
  padding: 6.25rem 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${(sectionProps) => `var(${sectionProps.bgMode})`};
`

const SectionTemplateContainer = styled(Container)`
  text-align: center;
`

const SectionTemplateSubheader = styled.p`
  font-size: 1rem;
  color: #8a3c05;
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
  color: #2c3e50;
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
  subheader: string
  header: string
  bgMode: string
  children: string | JSX.Element | JSX.Element[]
}

export const SectionTemplate: React.FC<SectionTemplateProps> = ({
  subheader,
  header,
  bgMode,
  children,
}) => {
  return (
    <SectionTemplateSection bgMode={bgMode}>
      <SectionTemplateContainer>
        <SectionTemplateSubheader>{subheader}</SectionTemplateSubheader>
        <SectionTemplateHeader>{header}</SectionTemplateHeader>
      </SectionTemplateContainer>
      {children}
    </SectionTemplateSection>
  )
}
