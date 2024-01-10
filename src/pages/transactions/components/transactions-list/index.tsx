import { CalendarBlank, TagSimple } from 'phosphor-react'

import { Container, Footer, FooterItem, List, Title, Value } from './styles'

export function TransactionsList() {
  return (
    <Container>
      <List>
        <Title>Desenvolvimento de site</Title>
        <Value variant="income">R$ 12.000,00</Value>
        <Footer>
          <FooterItem>
            <TagSimple />
            <span>Venda</span>
          </FooterItem>
          <FooterItem>
            <CalendarBlank />
            <span>13/04/2022</span>
          </FooterItem>
        </Footer>
      </List>
      <List>
        <Title>Hamburguer</Title>
        <Value variant="outcome">- R$ 59,00</Value>
        <Footer>
          <FooterItem>
            <TagSimple />
            <span>Alimentação</span>
          </FooterItem>
          <FooterItem>
            <CalendarBlank />
            <span>10/04/2022</span>
          </FooterItem>
        </Footer>
      </List>
      <List>
        <Title>Hamburguer</Title>
        <Value variant="outcome">- R$ 59,00</Value>
        <Footer>
          <FooterItem>
            <TagSimple />
            <span>Alimentação</span>
          </FooterItem>
          <FooterItem>
            <CalendarBlank />
            <span>10/04/2022</span>
          </FooterItem>
        </Footer>
      </List>
      <List>
        <Title>Hamburguer</Title>
        <Value variant="outcome">- R$ 59,00</Value>
        <Footer>
          <FooterItem>
            <TagSimple />
            <span>Alimentação</span>
          </FooterItem>
          <FooterItem>
            <CalendarBlank />
            <span>10/04/2022</span>
          </FooterItem>
        </Footer>
      </List>
    </Container>
  )
}
