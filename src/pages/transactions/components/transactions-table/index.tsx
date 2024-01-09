import { TransactionsTableContainer, TransactionValue } from './styles'

export function TransactionsTable() {
  return (
    <TransactionsTableContainer>
      <tbody>
        <tr>
          <td width="50%">Desenvolvimento Web</td>
          <td>
            <TransactionValue variant="income">R$ 12.000,00</TransactionValue>
          </td>
          <td>Venda</td>
          <td>13/04/2022</td>
        </tr>
        <tr>
          <td>Hamburguer</td>
          <td>
            <TransactionValue variant="outcome">R$ -59,00</TransactionValue>
          </td>
          <td>Alimentação</td>
          <td>10/04/2022</td>
        </tr>
      </tbody>
    </TransactionsTableContainer>
  )
}
