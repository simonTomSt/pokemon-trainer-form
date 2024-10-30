import styled from '@emotion/styled';
import Spinner from './icons/spinner';

export const Loader = styled(Spinner)`
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
