import type { Prisma, Transaction } from '@prisma/client'
import type { Decimal } from '@prisma/client/runtime/library'

export interface TransactionsRepository {
  create(data: Prisma.TransactionCreateInput): Promise<Transaction>
  list(): Promise<Transaction[]>
  getTransaction(id: string): Promise<Transaction | null>
  getSummary(): Promise<Decimal | null>
}
