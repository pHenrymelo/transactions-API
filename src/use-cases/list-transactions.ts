import type { Transaction } from '@prisma/client'
import type { TransactionsRepository } from '../repositories/transactions-repository'

interface ListTransactionsUseCaseResponse {
  transactions: Transaction[]
}

export class ListTransactionUseCase {
  constructor(private transactionsRepository: TransactionsRepository) {}

  async execute(): Promise<ListTransactionsUseCaseResponse> {
    const transactions = await this.transactionsRepository.list()

    if (!transactions) {
      throw new Error()
    }

    return {
      transactions,
    }
  }
}
