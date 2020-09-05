import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Wordly</title>
				<link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
				<link rel='icon' type='image/svg+xml' href='/favicon.svg' />
			</Head>
			<header>
				<h1 className='text-2xl font-bold'>Hello World!</h1>
			</header>
			<main>
				<p className='text-sm leading-tight'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
					fugit consequatur iusto harum sunt recusandae, velit quam, quidem
					reiciendis illum architecto numquam asperiores eius repellat neque
					iste, dicta commodi impedit?
				</p>
			</main>
		</>
	);
}
