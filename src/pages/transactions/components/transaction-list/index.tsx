import { format } from 'date-fns'
import { CalendarBlank, TagSimple } from 'phosphor-react'
import { useContext } from 'react'

import { TransactionsContext } from '../../../../contexts/transactions-context'
import {
  Container,
  Footer,
  FooterItem,
  Title,
  TransactionCard,
  Value,
} from './styles'

export function TransactionList() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <Container>
      {transactions.map((transaction) => (
        <TransactionCard key={transaction.id}>
          <Title>{transaction.description}</Title>
          <Value variant={transaction.type}>
            {transaction.type === 'outcome' ? '- ' : ''}
            R$ {transaction.price.toFixed(2)}
          </Value>
          <Footer>
            <FooterItem>
              <TagSimple />
              <span>{transaction.category}</span>
            </FooterItem>
            <FooterItem>
              <CalendarBlank />
              <span>
                {format(new Date('2024-01-10T12:50:20.819Z'), 'dd/MM/yyy')}
              </span>
            </FooterItem>
          </Footer>
        </TransactionCard>
      ))}
    </Container>
  )
}
