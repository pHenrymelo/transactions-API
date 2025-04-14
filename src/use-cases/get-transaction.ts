import type { Transaction } from '@prisma/client'
import type { TransactionsRepository } from '../repositories/transactions-repository'

interface GetTransactionUseCaseRequest {
  transactionId: string
}

interface GetTransactionUseCaseResponse {
  transaction: Transaction
}

export class GetTransactionUseCase {
  constructor(private transactionsRepository: TransactionsRepository) {}

  async execute({
    transactionId,
  }: GetTransactionUseCaseRequest): Promise<GetTransactionUseCaseResponse> {
    const transaction =
      await this.transactionsRepository.getTransaction(transactionId)

    if (!transaction) {
      throw new Error()
    }

    return {
      transaction,
    }
  }
}
