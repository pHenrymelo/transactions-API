import type { Transaction } from '@prisma/client'
import type { TransactionsRepository } from '../repositories/transactions-repository'

interface TransactionUseCaseRequest {
  title: string
  amount: number
  type: 'credit' | 'debit'
}

interface TransactionUseCaseResponse {
  transaction: Transaction
}

export class TransactionUseCase {
  constructor(private transactionsRepository: TransactionsRepository) {}

  async execute({
    title,
    type,
    amount,
  }: TransactionUseCaseRequest): Promise<TransactionUseCaseResponse> {
    const transaction = await this.transactionsRepository.create({
      title,
      amount: type === 'credit' ? amount : amount * -1,
    })

    return {
      transaction,
    }
  }
}
