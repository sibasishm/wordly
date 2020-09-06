import { useQuery } from 'react-query';

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
		<>
			<p>Found {words.length} words.</p>
			<pre>{JSON.stringify(words, null, 2)}</pre>
		</>
	);
}
