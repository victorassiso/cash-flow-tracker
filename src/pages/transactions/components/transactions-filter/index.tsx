import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { TransactionsContext } from '../../../../contexts/transactions-context'
import { TransactionsFilterContainer } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function TransactionsFilter() {
  const { fetchTransactions } = useContext(TransactionsContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <TransactionsFilterContainer
      onSubmit={handleSubmit(handleSearchTransactions)}
    >
      <input
        type="text"
        placeholder="Busque uma transação"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={22} weight="bold" />
        <span>Buscar</span>
      </button>
    </TransactionsFilterContainer>
  )
}
