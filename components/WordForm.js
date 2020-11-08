import { useState } from 'react';
import { useMutation, queryCache } from 'react-query';

async function createWord(formData) {
	const res = await fetch('/api/words/create', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(formData),
	});

	const data = await res.json();
	return data;
}

export default function WordForm() {
	const [type, setType] = useState('noun');
	const [name, setName] = useState('');
	const [meaning, setMeaning] = useState('');
	const [sentence, setSentence] = useState('');

	const [addWord] = useMutation(createWord, {
		onMutate: data => {
			// 0. reset form state
			setType('noun');
			setName('');
			setMeaning('');
			setSentence('');

			// 1. cancel all queries
			queryCache.cancelQueries('words');

			// 2. get snapshot of current state
			const snapshot = queryCache.getQueryData('words');

			// 3. optimistic cache update
			queryCache.setQueryData('words', prev => [
				...prev,
				{
					id: new Date().toISOString(),
					createdAt: new Date().toISOString(),
					...data,
				},
			]);

			// 4. return snapshot (previous value)
			return snapshot;
		},
		onError: (error, data, snapshot) =>
			queryCache.setQueryData('words', snapshot),
		onSettled: () => queryCache.invalidateQueries('words'),
	});

	const handleFormSubmit = e => {
		e.preventDefault();
		addWord({
			type,
			name,
			sentence,
			meaning,
		});
	};

	return (
		<form className='bg-white rounded p-6' onSubmit={handleFormSubmit}>
			<div className='inline-block relative w-full'>
				<select
					className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500'
					value={type}
					onChange={e => setType(e.target.value)}
				>
					<option value='noun'>Noun</option>
					<option value='verb'>Verb</option>
					<option value='adjective'>Adjective</option>
					<option value='adverb'>Adverb</option>
				</select>
				<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
					<svg
						className='fill-current h-4 w-4'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 20 20'
					>
						<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
					</svg>
				</div>
			</div>
			<div className='mt-8'>
				<label
					htmlFor='name'
					className='block text-gray-700 uppercase text-sm font-bold'
				>
					Word
				</label>
				<input
					className='appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-gray-500'
					type='text'
					value={name}
					onChange={e => setName(e.target.value)}
					name='name'
					id='name'
					autoComplete='off'
				/>
			</div>
			<div className='mt-4'>
				<label
					htmlFor='meaning'
					className='block text-gray-700 uppercase text-sm font-bold'
				>
					Meaning
				</label>
				<input
					className='appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-gray-500'
					type='text'
					value={meaning}
					onChange={e => setMeaning(e.target.value)}
					name='meaning'
					id='meaning'
					autoComplete='off'
				/>
			</div>
			<div className='mt-4'>
				<label
					htmlFor='meaning'
					className='block text-gray-700 uppercase text-sm font-bold'
				>
					Sentence
				</label>
				<input
					className='appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-gray-500'
					type='text'
					value={sentence}
					onChange={e => setSentence(e.target.value)}
					name='sentence'
					id='sentence'
					autoComplete='off'
				/>
			</div>
			<button
				className='bg-gray-900 text-white font-semibold py-2 px-4 rounded mt-6 focus:outline-none focus:bg-gray-800 hover:bg-gray-800'
				type='submit'
			>
				Submit
			</button>
		</form>
	);
}
