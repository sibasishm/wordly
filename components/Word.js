import { useMutation, queryCache } from 'react-query';

const colorsMap = {
	noun: 'text-green-700 bg-green-100',
	verb: 'text-pink-700 bg-pink-100',
	adjective: 'text-indigo-700 bg-indigo-100',
	adverb: 'text-orange-700 bg-orange-100',
};

async function deleteWord(id) {
	const res = await fetch(`/api/words/delete/${id}`, {
		method: 'DELETE',
	});

	const data = await res.json();
	return data;
}

export default function Word({ word }) {
	const [removeWord] = useMutation(deleteWord, {
		onMutate: wordId => {
			queryCache.cancelQueries('words');

			const snapshot = queryCache.getQueryData('words');

			queryCache.setQueryData('words', prev =>
				prev.filter(({ id }) => id !== wordId)
			);

			return snapshot;
		},
		onError: (error, data, snapshot) =>
			queryCache.setQueryData('words', snapshot),
		onSettled: () => queryCache.invalidateQueries('words'),
	});

	return (
		<div className='mb-4 border bg-white rounded p-4 md:px-6'>
			<div className='flex justify-between items-center'>
				<p
					className={`text-sm p-1 px-3 rounded-full inline-block font-semibold ${
						colorsMap[word.type]
					}`}
				>
					{word.type}
				</p>
				<button
					className='bg-red-100 text-red-500 rounded-full p-2 focus:outline-none focus:bg-red-200 hover:bg-red-200'
					onClick={() => removeWord(word.id)}
				>
					<svg
						viewBox='0 0 20 20'
						fill='currentColor'
						className='trash w-5 h-5'
					>
						<path
							fillRule='evenodd'
							d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
							clipRule='evenodd'
						></path>
					</svg>
				</button>
			</div>
			<h2 className='font-bold text-xl md:text-2xl lowercase'>{word.name}</h2>
			<p className='text-md text-gray-700'>{word.meaning}</p>
			<p className='mt-2 text-sm text-gray-700'>{word.sentence}</p>
		</div>
	);
}
