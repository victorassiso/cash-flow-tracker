import { Header } from '../../components/header'
import { Summary } from '../../components/summary'
import { TransactionsFilter } from './components/transactions-filter'
import { TransactionsTable } from './components/transactions-table/index'
import { TransactionsContainer } from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <TransactionsFilter />
        <TransactionsTable />
      </TransactionsContainer>
    </div>
  )
}
