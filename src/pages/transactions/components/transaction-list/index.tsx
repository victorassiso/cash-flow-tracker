import { format } from 'date-fns'
import { CalendarBlank, TagSimple } from 'phosphor-react'
import { useContext } from 'react'

import { TransactionsContext } from '../../../../contexts/transactions-context'
import { dateFormatter, priceFormatter } from '../../../../utils/formatter'
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
            {transaction.type === 'outcome' && '- '}
            {priceFormatter.format(transaction.price)}
          </Value>
          <Footer>
            <FooterItem>
              <TagSimple />
              <span>{transaction.category}</span>
            </FooterItem>
            <FooterItem>
              <CalendarBlank />
              <span>
                {dateFormatter.format(new Date(transaction.createdAt))}
              </span>
            </FooterItem>
          </Footer>
        </TransactionCard>
      ))}
    </Container>
  )
}
