import styled from 'styled-components';

export const SocialIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.3125rem 0.625rem 0.3125rem 0rem;

  svg {
    font-size: 1rem;
  }
`;

export const SocialLink = styled.a`
  color: var(--bs-gray-800);
  transition: all 200ms ease;

  &:hover {
    color: var(--bs-gray-700);
  }
`
