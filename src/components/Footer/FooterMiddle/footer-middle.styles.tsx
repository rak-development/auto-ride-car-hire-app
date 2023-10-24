import styled from "@emotion/styled";

export const FooterMiddleWrapper = styled.div`
  background-color: var(--bs-gray-200);
`

export const ContentBox = styled.div`
  color: var(--bs-gray-700);
  margin-bottom: 2.5rem;

  p {
    margin: 0;
    padding: 0.625rem 0;

    &:first-of-type {
      padding-top: 0;
    }
  }
`
export const TitleBox = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1.5rem;
  color: var(--bs-gray-800);
  margin-bottom: 1.875rem;

  span {
    height: 0.0625rem;
    width: 3.125rem;
    display: block;
    margin-top: 0.625rem;
    background-color: var(--bs-primary);
  }
`
