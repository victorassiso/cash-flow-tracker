import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
`
export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: ${(props) => props.theme['gray-700']};
  border-radius: 6px;

  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
  }

  @media screen and (min-width: 800px) {
    grid-template-columns: 3fr 1fr 2fr;
  }
`

export const Title = styled.div`
  color: ${(props) => props.theme['gray-300']};

  font-size: 1.125rem;

  @media screen and (min-width: 600px) {
    font-size: 1rem;
  }
`

interface ValueProps {
  variant: 'income' | 'outcome'
}

export const Value = styled.div<ValueProps>`
  font-size: 1.375rem;
  font-weight: bold;

  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};

  @media screen and (min-width: 600px) {
    font-size: 1rem;
    font-weight: normal;
  }
`
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;

  color: ${(props) => props.theme['gray-500']};

  @media screen and (min-width: 600px) {
    margin-top: 0;
    color: ${(props) => props.theme['gray-300']};

    svg {
      display: none;
    }
  }
`
export const FooterItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`
