import { NextApiRequest, NextApiResponse } from 'next';
import { products } from '../../../data/produtcts'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(products);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}