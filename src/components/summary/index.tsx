import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'

import { TransactionsContext } from '../../contexts/transactions-context'
import { priceFormatter, secondaryDateFormatter } from '../../utils/formatter'
import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      const transactionDate = new Date(transaction.createdAt)

      if (transaction.type === 'income') {
        acc.income.total += transaction.price
        acc.total.total += transaction.price

        if (transactionDate > acc.income.lastUpdate) {
          acc.income.lastUpdate = transactionDate
        }
      } else {
        acc.outcome.total += transaction.price
        acc.total.total -= transaction.price

        if (transactionDate > acc.outcome.lastUpdate) {
          acc.outcome.lastUpdate = transactionDate
        }
      }

      if (transactionDate > acc.total.lastUpdate) {
        acc.total.lastUpdate = transactionDate
      }

      return acc
    },
    {
      income: {
        total: 0,
        lastUpdate: new Date(),
      },
      outcome: {
        total: 0,
        lastUpdate: new Date(),
      },
      total: {
        total: 0,
        lastUpdate: new Date(),
      },
    },
  )

  return (
    <SummaryContainer>
      {/* Income */}
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>{priceFormatter.format(summary.income.total)}</strong>
        <footer>
          <span>
            Última entrada em{' '}
            {secondaryDateFormatter.format(summary.income.lastUpdate)}
          </span>
        </footer>
      </SummaryCard>

      {/* Outcome */}
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{priceFormatter.format(summary.outcome.total)}</strong>
        <footer>
          <span>
            Última saída em{' '}
            {secondaryDateFormatter.format(summary.outcome.lastUpdate)}
          </span>
        </footer>
      </SummaryCard>

      {/* Total */}
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="white" />
        </header>

        <strong>{priceFormatter.format(summary.total.total)}</strong>
        <footer>
          <span>
            Última transação em{' '}
            {secondaryDateFormatter.format(summary.total.lastUpdate)}
          </span>
        </footer>
      </SummaryCard>
    </SummaryContainer>
  )
}
