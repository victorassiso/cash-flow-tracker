import { Header } from '../../components/header'
import { Summary } from '../../components/summary'
import { TransactionsFilter } from './components/transactions-filter'
import { TransactionsList } from './components/transactions-list'
import { TransactionsContainer } from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <TransactionsFilter />
        <TransactionsList />
      </TransactionsContainer>
    </div>
  )
}
