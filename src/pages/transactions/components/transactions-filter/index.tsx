import { MagnifyingGlass } from 'phosphor-react'

import { TransactionsFilterContainer } from './styles'

export function TransactionsFilter() {
  return (
    <TransactionsFilterContainer>
      <input type="text" placeholder="Busque uma transação" />
      <button type="submit">
        <MagnifyingGlass size={20} weight="bold" />
        Buscar
      </button>
    </TransactionsFilterContainer>
  )
}
