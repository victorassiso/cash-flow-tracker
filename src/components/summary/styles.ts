import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  padding: 24px 24px 24px 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  border-radius: 6px;
  background-color: ${(props) => props.theme['gray-600']};

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: start;
  }

  span {
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    align-self: stretch;
    font-size: 2rem;
    font-weight: bold;
    color: ${(props) => props.theme['gray-100']};
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background: ${(props) => props.theme['green-500']};
    `}
`
