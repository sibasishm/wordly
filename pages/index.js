import Head from 'next/head';

export default function Home() {
	return (
		<div className='antialiased text-gray-900'>
			<Head>
				<title>Wordly</title>
				<link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
				<link rel='icon' type='image/svg+xml' href='/favicon.svg' />
			</Head>
			<header className='p-4 py-8 sm:py-12 lg:py-16 sm:text-center space-y-4 sm:space-y-8 lg:space-y-12'>
				<h1 className='text-4xl leading-6 sm:text-6xl sm:leading-8 lg:text-8xl lg:leading-10 font-extrabold tracking-tight'>
					Wordly.
				</h1>
				<p className='text-md sm:text-lg lg:text-2xl text-gray-700 leading-6 lg:leading-8'>
					A personalized collection of new and unique words.
				</p>
				<div className='max-w-3xl w-full sm:w-2/3 sm:mx-auto'>
					<label htmlFor='serach' className='hidden'>
						Seach...
					</label>
					<div className='relative text-gray-700'>
						<input
							type='text'
							name='search'
							id='search'
							placeholder='search words (e.g; archipelago)'
							className='shadow appearance-none border rounded w-full py-3 px-4 pr-8 leading-tight focus:outline-none focus:border-gray-500'
							autoComplete='off'
						/>
						<div className='absolute inset-y-0 right-0 p-3'>
							<svg
								viewBox='0 0 20 20'
								fill='currentColor'
								className='fill-current w-5 h-5'
							>
								<path
									fillRule='evenodd'
									d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
									clipRule='evenodd'
								/>
							</svg>
						</div>
					</div>
				</div>
			</header>
			<main className='bg-gray-100 min-h-screen'>
				<div className='max-w-3xl mx-auto p-4 sm:px-6 lg:max-w-5xl lg:px-0 space-y-4'>
					<p className='text-md leading-tight'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nemo
						ipsa, repudiandae asperiores deleniti reiciendis laudantium modi.
						Inventore repudiandae reprehenderit ratione esse? Eveniet quod
						similique optio iste earum quas modi. Deleniti laudantium quisquam
						tenetur. Repudiandae amet corrupti voluptas debitis reiciendis
						minima provident tempore earum aliquam, consectetur accusantium
						porro enim quia illum fugit minus facere in quisquam? Voluptate
						dolorum veniam ea. Magni accusantium incidunt dolores neque
						repellendus voluptatem numquam minima quia praesentium nostrum
						provident non excepturi ad rerum ipsum nemo dignissimos consequuntur
						porro est consectetur similique, pariatur dicta assumenda. Eum,
						dicta. Quo esse animi, eius nostrum aperiam accusantium dolorem,
						placeat est voluptatum nisi vel, doloribus eveniet? Possimus quidem
						laboriosam ducimus! Fugit, autem voluptatibus. Eius velit officiis,
						iste quae aliquid id ducimus? Earum, ipsam doloribus consequatur
						fuga, eos sapiente distinctio qui soluta adipisci dolores aliquam
						assumenda dicta. Atque excepturi, error iste quos sint, deleniti
						commodi earum vero, maiores reiciendis molestiae repellendus? Velit!
					</p>
					<p className='text-md leading-tight'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nemo
						ipsa, repudiandae asperiores deleniti reiciendis laudantium modi.
						Inventore repudiandae reprehenderit ratione esse? Eveniet quod
						similique optio iste earum quas modi. Deleniti laudantium quisquam
						tenetur. Repudiandae amet corrupti voluptas debitis reiciendis
						minima provident tempore earum aliquam, consectetur accusantium
						porro enim quia illum fugit minus facere in quisquam? Voluptate
						dolorum veniam ea. Magni accusantium incidunt dolores neque
						repellendus voluptatem numquam minima quia praesentium nostrum
						provident non excepturi ad rerum ipsum nemo dignissimos consequuntur
						porro est consectetur similique, pariatur dicta assumenda.
					</p>
					<p className='text-md leading-tight'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nemo
						ipsa, repudiandae asperiores deleniti reiciendis laudantium modi.
						Inventore repudiandae reprehenderit ratione esse? Eveniet quod
						similique optio iste earum quas modi. Deleniti laudantium quisquam
						tenetur. Repudiandae amet corrupti voluptas debitis reiciendis
						minima provident tempore earum aliquam, consectetur accusantium
						porro enim quia illum fugit minus facere in quisquam? Voluptate
						dolorum veniam ea. Magni accusantium incidunt dolores neque
						repellendus voluptatem numquam minima quia praesentium nostrum
						provident non excepturi ad rerum ipsum nemo dignissimos consequuntur
						porro est consectetur similique, pariatur dicta assumenda. Eum,
						dicta. Quo esse animi, eius nostrum aperiam accusantium dolorem,
						placeat est voluptatum nisi vel, doloribus eveniet? Possimus quidem
						laboriosam ducimus! Fugit, autem voluptatibus.
					</p>
				</div>
			</main>
		</div>
	);
}
