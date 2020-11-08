import { useState } from 'react';
import Modal from 'react-modal';

import WordForm from './WordForm';

Modal.setAppElement('#__next');

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		transform: 'translate(-50%, -50%)',
		width: '90%',
		maxWidth: '550px',
	},
};

export default function AddWord() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<button
				className='fixed flex items-center justify-between bg-gray-900 text-white font-semibold py-2 px-3 rounded mt-6 focus:outline-none focus:bg-gray-800 hover:bg-gray-800'
				onClick={openModal}
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
			<Modal
				isOpen={isModalOpen}
				contentLabel='Add Word'
				onRequestClose={closeModal}
				style={customStyles}
			>
				<div className='flex justify-between'>
					<h2 className='text-lg leading-8 sm:text-xl sm:leading-9 lg:text-2xl lg:leading-10 font-bold tracking-tight'>
						Add new word
					</h2>
					<button
						className='bg-gray-200 text-gray-700 rounded-full p-2 focus:outline-none focus:text-gray-900 hover:text-gray-900 float-right'
						onClick={closeModal}
					>
						<svg
							className='w-6 h-6'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					</button>
				</div>
				<WordForm />
			</Modal>
		</>
	);
}
