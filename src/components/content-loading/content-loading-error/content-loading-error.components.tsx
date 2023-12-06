import { type FC } from "react"

import styled from "@emotion/styled"

const ContentLoadingErrorWrapper = styled.div`
  font-size: 1.5rem;
  text-align: center;
  font-weight: 900;
  line-height: 1.2em;
  color: var(--bs-red);
`

interface ContentLoadingErrorProps {
  text: string
}

export const ContentLoadingError: FC<ContentLoadingErrorProps> = ({text}) => 
   (
    <ContentLoadingErrorWrapper>
      {text}
    </ContentLoadingErrorWrapper>
  )

