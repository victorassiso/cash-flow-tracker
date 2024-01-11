import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;

  @media screen and (min-width: 600px) {
    width: auto;
    bottom: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 32rem;
    padding: 2.5rem 3rem;
  }

  background: ${(props) => props.theme['gray-800']};
  border-radius: 6px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 1rem;

    input {
      padding: 1rem;

      background: ${(props) => props.theme['gray-900']};
      border: none;
      border-radius: 6px;

      color: ${(props) => props.theme['gray-300']};

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      /* Adjust the transition properties to an extremely long duration to effectively disable it */
      transition:
        background-color 500000s ease-in-out 0s,
        color 500000s ease-in-out 0s;
    }

    button[type='submit'] {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1.5rem;
      padding: 1rem 2rem;

      background: ${(props) => props.theme['green-500']};
      border: none;
      border-radius: 6px;
      cursor: pointer;

      color: ${(props) => props.theme.white};
      font-weight: bold;

      &:not(:disabled):hover {
        background: ${(props) => props.theme['green-700']};
        border-color: ${(props) => props.theme['green-700']};
        transition:
          background-color 0.2s,
          border-color 0.2s;
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
  }
`

export const Title = styled(Dialog.Title)`
  color: ${(props) => props.theme['gray-100']};
  font-weight: bold;
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  background: transparent;
  border: none;
  color: ${(props) => props.theme['gray-500']};
  cursor: pointer;
  line-height: 0;

  &:hover {
    color: ${(props) => props.theme['gray-300']};
    transition: background-color 0.2s;
  }
`

export const TransactionTypesContainer = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`
interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;

  background: ${(props) => props.theme['gray-700']};
  border-radius: 6px;
  border: none;
  cursor: pointer;

  color: ${(props) => props.theme['gray-300']};

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  &[data-state='unchecked'] {
    &:hover {
      background: ${(props) => props.theme['gray-600']};
      transition: background-color 0.2s;
    }
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`
