import { type FC } from "react"

import styled from "@emotion/styled"

const ContentLoadingWrapper = styled.div`
  font-size: 1.5rem;
  text-align: center;
  font-weight: 900;
  line-height: 1.2em;
  color: var(--bs-primary);
`

interface ContentLoadingProps {
  text: string
}

export const ContentLoading: FC<ContentLoadingProps> = ({text}) => 
   (
    <ContentLoadingWrapper>
      {text}
    </ContentLoadingWrapper>
  )

