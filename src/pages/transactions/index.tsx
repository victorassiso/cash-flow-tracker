import { Header } from '../../components/header'
import { Summary } from '../../components/summary'
import { TransactionsContextProvider } from '../../contexts/transactions-context'
import { TransactionList } from './components/transaction-list'
import { TransactionsFilter } from './components/transactions-filter'
import { TransactionsContainer } from './styles'

export interface Transaction {
  id: string
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

export function Transactions() {
  return (
    <TransactionsContextProvider>
      <Header />
      <Summary />
      <TransactionsContainer>
        <TransactionsFilter />
        <TransactionList />
      </TransactionsContainer>
    </TransactionsContextProvider>
  )
}
