import { createContext, ReactNode, useEffect, useState } from 'react'

import { api } from '../lib/axios'
import { Transaction } from '../pages/transactions'

interface TransactionsContextProviderProps {
  children: ReactNode
}

interface CreateTransactionProps {
  title: string
  value: number
  type: 'income' | 'outcome'
  category: string
}

interface TransactionsContextProps {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionProps) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsContextProps)

export function TransactionsContextProvider({
  children,
}: TransactionsContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }
  useEffect(() => {
    fetchTransactions()
  }, [])

  async function createTransaction(data: CreateTransactionProps) {
    const { title, value, type, category } = data

    const response = await api.post('/transactions', {
      title,
      value,
      type,
      category,
      createdAt: new Date(),
    })

    setTransactions((state) => [response.data, ...state])
  }
  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
