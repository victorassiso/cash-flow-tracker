import { Header } from '../../components/header'
import { Summary } from '../../components/summary'
import { TransactionsTable } from './components/transactions-table/index'
import { TransactionsContainer } from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <TransactionsTable />
      </TransactionsContainer>
    </div>
  )
}
