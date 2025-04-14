import type { Prisma, Transaction } from '@prisma/client'
import type { TransactionsRepository } from '../transactions-repository'
import { prisma } from '../../lib/prisma'

export class PrismaTransactionsRepository implements TransactionsRepository {
  async getTransaction(id: string): Promise<Transaction | null> {
    const transaction = await prisma.transaction.findUnique({
      where: {
        id,
      },
    })

    return transaction
  }
  async getSummary() {
    const transactionsSummary = await prisma.transaction.aggregate({
      _sum: {
        amount: true,
      },
    })

    const summary = transactionsSummary._sum.amount

    return summary
  }
  async list() {
    const transactions = await prisma.transaction.findMany()

    return transactions
  }
  async create(data: Prisma.TransactionCreateInput) {
    const transaction = await prisma.transaction.create({
      data,
    })

    return transaction
  }
}
