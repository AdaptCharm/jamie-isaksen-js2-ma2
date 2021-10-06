import type { NextApiRequest, NextApiResponse } from 'next'

import { products } from '@data/products'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query

  if (req.method === 'DELETE') {
    const result = products.find((product) => +product.isbn === +id)

    const index = products.findIndex((product) => +product.isbn === +id)
    products.splice(index, 1)

    res.status(204).json(result)
  }

  return res.send('Method not allowed.')
}
