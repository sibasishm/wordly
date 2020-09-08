import { useQuery } from 'react-query';
import Word from './Word';

async function fetchWords() {
	const res = await fetch('/api/words');
	const data = await res.json();
	return data;
}

export default function WordsContainer(): React.ReactNode {
	const { data: words, error, status } = useQuery('words', fetchWords, {
		refetchOnWindowFocus: false,
	});

	if (status === 'loading') return <p>Loading...</p>;
	if (status === 'error')
		return <p>Something went wrong. Please refresh this page.</p>;

	return (
		<div className='flex flex-wrap -mx-2'>
			{words.map(word => (
				<article className='w-full sm:w-1/2 lg:w-1/3 px-2' key={word.id}>
					<Word word={word} />
				</article>
			))}
		</div>
	);
}
