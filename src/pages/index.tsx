import Head from 'next/head';
import Navbar from '../common/navbar';

export default function home() {
	return (
		<div>
			<Head>
				<title>Lumia</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
                <Navbar/>
            </main>
			<footer></footer>
		</div>
	);
}
