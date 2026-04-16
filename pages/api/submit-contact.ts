import type { NextApiRequest, NextApiResponse } from 'next';
import vercelHandler from '../../api/submit-contact';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  return vercelHandler(req as any, res as any);
}

