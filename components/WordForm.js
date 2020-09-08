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
	const [name, setName] = useState('');
	const [meaning, setMeaning] = useState('');
	const [sentence, setSentence] = useState('');

	const [addWord] = useMutation(createWord, {
		onMutate: data => {
			// 0. reset form state
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
			name,
			sentence,
			meaning,
		});
	};

	return (
		<form className='bg-white rounded p-6' onSubmit={handleFormSubmit}>
			<div>
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
				className='flex items-center justify-between bg-gray-900 text-white font-semibold py-2 px-3 rounded mt-6 focus:outline-none focus:bg-gray-800 hover:bg-gray-800'
				type='submit'
			>
				<svg
					viewBox='0 0 20 20'
					fill='currentColor'
					className='view-grid-add w-6 h-6 mr-2'
				>
					<path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z' />
				</svg>
				Add Word
			</button>
		</form>
	);
}
