import { useQuery } from 'react-query';

const colorsMap = {
	noun: 'text-green-700 bg-green-100',
	verb: 'text-pink-700 bg-pink-100',
	adjective: 'text-indigo-700 bg-indigo-100',
	adverb: 'text-orange-700 bg-orange-100',
};

async function fetchWords() {
	const res = await fetch('/api/words');
	const data = await res.json();
	return data;
}

export default function WordsContainer() {
	const { data: words, error, status } = useQuery('words', fetchWords, {
		refetchOnWindowFocus: false,
	});
	console.log(error);

	if (status === 'loading') return <p>Loading...</p>;
	if (status === 'error') return <p>{error.message}</p>;

	return (
		<div className='flex flex-wrap -mx-2'>
			{words.map(word => (
				<article className='w-full sm:w-1/2 lg:w-1/3 px-2'>
					<div className='mb-4 border bg-white rounded p-4 md:px-6'>
						<p
							className={`text-sm p-1 px-2 rounded-full inline-flex ${
								colorsMap[word.type]
							}`}
						>
							{word.type}
						</p>
						<h2 className='font-bold text-xl md:text-2xl lowercase'>
							{word.name}
						</h2>
						<p className='text-md text-gray-700'>{word.meaning}</p>
						<p className='mt-2 text-sm text-gray-700'>{word.sentence}</p>
					</div>
				</article>
			))}
		</div>
	);
}
