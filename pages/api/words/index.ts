import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

export default async function (req: NextApiRequest, res: NextApiResponse) {
	const prisma = new PrismaClient({ log: ['query'] });

	try {
		const words = await prisma.word.findMany();
		res.status(200);
		res.json(words);
	} catch (err) {
		res.status(500);
		res.json({ error: 'Unable to fetch words from database.' });
	} finally {
		await prisma.$disconnect();
	}
}
