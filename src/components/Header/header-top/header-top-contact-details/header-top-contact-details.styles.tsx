import styled from 'styled-components';
import { device } from '../../../../devices-breakpoints';


export const ContactContainer = styled.div`
  color: var(--bs-gray-800);
  font-size: 0.9375rem;
`;

export const ContactElement = styled.div`
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;

    svg {
      font-size: 1rem;

      @media ${device.md} { 
        padding-right: 0.9375rem;
      }
    }

    @media ${device.md} { 
      padding-top: 0;
      padding-bottom: 0;
      padding-right: 0.9375rem;
      margin-right: 1.5625rem;
    }
`;
