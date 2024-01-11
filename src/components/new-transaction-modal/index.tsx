import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { useContext } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { TransactionsContext } from '../../contexts/transactions-context'
import {
  CloseButton,
  Content,
  Overlay,
  Title,
  TransactionTypeButton,
  TransactionTypesContainer,
} from './styles'

const newTransactionFormSchema = z.object({
  title: z.string().min(1),
  value: z.number(),
  type: z.enum(['income', 'outcome']),
  category: z.string().min(1),
})

export type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionsContext)
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  async function handleCreateTransaction(data: NewTransactionFormInputs) {
    await createTransaction(data)
    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Title>Nova Transação</Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateTransaction)}>
          <input
            {...register('title')}
            type="text"
            placeholder="Descrição"
            required
          />
          <input
            {...register('value', { valueAsNumber: true })}
            type="number"
            placeholder="Preço"
            required
          />
          <input
            {...register('category')}
            type="text"
            placeholder="Categoria"
            required
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionTypesContainer
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>

                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionTypesContainer>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
