import { clsx } from 'clsx';
import { useEffect, useState } from 'react';

import Col from '../Layout/Col';
import Container from '../Layout/Container';

export default function Grid() {
	const [isVisible, setIsVisible] = useState(false);
	const gridColumns: Number = 26;

	useEffect(() => {
		document.body.addEventListener('keydown', handleKeyDown);
		return () => document.body.removeEventListener('keydown', handleKeyDown);
	}, []);

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'g') {
			setIsVisible((prev) => !prev);
			console.log('Grid visibility toggled');
		}
	}

	// Press G to toggle the grid
	return (
		<Container className={clsx('gridContainer h-screen w-full fixed inset-0 origin-top pointer-events-none z-10', !isVisible && 'grid-visible')}>
			{Array.from(Array(gridColumns).keys()).map((i) => (
				<Col key={i} className="bg-red-100 w-[.1rem]" colStart={[{ i }]} colEnd={[{ i }]}></Col>
			))}
		</Container>
	);
}
