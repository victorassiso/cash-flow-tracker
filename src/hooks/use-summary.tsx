import { useContext } from 'react'

import { TransactionsContext } from '../contexts/transactions-context'

interface SummaryType {
  income: number
  outcome: number
  total: number
  lastUpdate: {
    income: null | Date
    outcome: null | Date
    total: null | Date
  }
}

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      const transactionDate = new Date(transaction.createdAt)
      if (transaction.type === 'income') {
        acc.income += transaction.value
        acc.total += transaction.value

        if (acc.lastUpdate.income) {
          if (acc.lastUpdate.income < transactionDate) {
            acc.lastUpdate.income = transactionDate
          }
        } else {
          acc.lastUpdate.income = transactionDate
        }
      } else {
        acc.outcome += transaction.value
        acc.total -= transaction.value

        if (acc.lastUpdate.outcome) {
          if (acc.lastUpdate.outcome < transactionDate) {
            acc.lastUpdate.outcome = transactionDate
          }
        } else {
          acc.lastUpdate.outcome = transactionDate
        }
      }

      if (acc.lastUpdate.total) {
        if (acc.lastUpdate.total < transactionDate) {
          acc.lastUpdate.total = transactionDate
        }
      } else {
        acc.lastUpdate.total = transactionDate
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
      lastUpdate: {
        income: null,
        outcome: null,
        total: null,
      },
    } as SummaryType,
  )

  return summary
}
