import type { NextApiRequest, NextApiResponse } from 'next'

import { products } from '@data/products'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    return res.status(200).json(products)
  }

  return res.send('Method not allowed.')
}
