import type { NextPage } from 'next';
import Head from 'next/head';

import Calculator from '../comps/calculator/calculator';
import Grid from '../comps/Layout/Grid';

const Page: NextPage = () => {
	return (
		<>
			<Head>
				<title>Caracal Agency</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Calculator />
			<Grid />
		</>
	);
};

export default Page;
