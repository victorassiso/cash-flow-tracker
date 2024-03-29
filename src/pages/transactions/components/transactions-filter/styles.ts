import { styled } from 'styled-components'

export const TransactionsFilterContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    padding: 1rem;

    background-color: ${(props) => props.theme['gray-900']};
    border: none;
    border-radius: 6px;
    color: ${(props) => props.theme['gray-300']};

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }

    @media screen and (max-width: 600px) {
      padding: 1.25rem;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.875rem 2rem;
    gap: 0.75rem;

    border-radius: 6px;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme['green-300']};
    cursor: pointer;

    color: ${(props) => props.theme['green-300']};
    font-weight: bold;

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme['green-500']};
      border-color: ${(props) => props.theme['green-500']};

      color: ${(props) => props.theme.white};

      transition:
        background-color 0.2s,
        border-color 0.2s,
        color 0.2s;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    @media screen and (max-width: 600px) {
      padding: 1rem;

      span {
        display: none;
      }

      svg {
        width: 24px;
        height: auto;
      }
    }
  }
`
