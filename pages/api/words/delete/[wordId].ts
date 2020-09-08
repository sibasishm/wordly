import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

export default async function (req: NextApiRequest, res: NextApiResponse) {
	const prisma = new PrismaClient({ log: ['query'] });

	try {
		const {
			query: { wordId },
		} = req;
		if (wordId) {
			await prisma.word.delete({
				where: {
					id: Number(wordId),
				},
			});
			res.status(204);
			res.json(null);
		} else {
			res.status(500);
			res.json({ error: 'Unable to delete word from database.' });
		}
	} catch (err) {
		res.status(500);
		res.json({ error: 'Unable to delete word from database.' });
	} finally {
		await prisma.$disconnect();
	}
}
