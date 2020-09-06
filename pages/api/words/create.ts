import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

export default async function (req: NextApiRequest, res: NextApiResponse) {
	const prisma = new PrismaClient({ log: ['query'] });

	try {
		const word = await prisma.word.create({
			data: req.body,
		});
		res.status(201);
		res.json(word);
	} catch (err) {
		res.status(500);
		res.json({ error: 'Unable to save word to database.' });
	} finally {
		await prisma.$disconnect();
	}
}
