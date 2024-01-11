import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

import { useSummary } from '../../hooks/use-summary'
import { priceFormatter, secondaryDateFormatter } from '../../utils/formatter'
import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  const summary = useSummary()
  return (
    <SummaryContainer>
      {/* Income */}
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
        <footer>
          {summary.lastUpdate.income ? (
            <span>
              Última entrada em{' '}
              {secondaryDateFormatter.format(summary.lastUpdate.income)}
            </span>
          ) : (
            <span>Nenhuma entrada registrada</span>
          )}
        </footer>
      </SummaryCard>

      {/* Outcome */}
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
        <footer>
          {summary.lastUpdate.outcome ? (
            <span>
              Última saída em{' '}
              {secondaryDateFormatter.format(summary.lastUpdate.outcome)}
            </span>
          ) : (
            <span>Nenhuma saída registrada</span>
          )}
        </footer>
      </SummaryCard>

      {/* Total */}
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="white" />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
        <footer>
          {summary.lastUpdate.total ? (
            <span>
              Última transação em{' '}
              {secondaryDateFormatter.format(summary.lastUpdate.total)}
            </span>
          ) : (
            <span>Nenhuma transação registrada</span>
          )}
        </footer>
      </SummaryCard>
    </SummaryContainer>
  )
}
