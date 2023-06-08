'use client';
import { clsx } from 'clsx';
import { useState } from 'react';
import { useStore } from '../../lib/store';

import Button from './button';
import Header from './header';
import ThemeSwitch from './theme';

export default function Calculator() {
	const [result, setResult] = useState(0);
	const [currentValue, setCurrentValue] = useState('');

	const handleNumberClick = (number: string) => {
		setCurrentValue(currentValue + number);
	};

	const handleOperatorClick = (operator: string) => {
		setCurrentValue(currentValue + operator);
	};

	const handleDeleteClick = () => {
		setCurrentValue(currentValue.slice(0, -1));
	};

	const handleResetClick = () => {
		setCurrentValue('');
		setResult(0);
	};

	const handleEqualClick = () => {
		try {
			const calculatedResult = eval(currentValue);
			setResult(calculatedResult);
			setCurrentValue(calculatedResult.toString());
		} catch (error) {
			setResult('Error');
			setCurrentValue('');
		}
	};

	const currentTheme = useStore((state) => state.currentTheme);

	return (
		<section className={clsx(
			'w-screen h-screen bg-fiord text-white py-96 transition-all duration-500',
			currentTheme === 'dark' && 'bg-fiord text-white',
			currentTheme === 'light' && 'bg-mercury text-armadillo',
			currentTheme === 'purple' && 'bg-hightviolet text-brightsun'
			)}>
			<div className="sm:w-[540px] m-auto w-11/12">
				<ThemeSwitch />
				<Header value={currentValue || result} theme={currentTheme} />
				<div className="grid grid-cols-4 gap-20 p-32 font-bold bg-mirage text-40 rounded-xl">
					<Button variant={'primary'} theme={currentTheme} handleClickEvent={() => handleNumberClick('7')}>
						7
					</Button>
					<Button variant={'primary'} theme={currentTheme} handleClickEvent={() => handleNumberClick('8')}>
						8
					</Button>
					<Button variant={'primary'} theme={currentTheme} handleClickEvent={() => handleNumberClick('9')}>
						9
					</Button>
					<Button variant={'secondary'} theme={currentTheme} handleClickEvent={handleDeleteClick}>
						del
					</Button>

					<Button variant={'primary'} theme={currentTheme} handleClickEvent={() => handleNumberClick('4')}>
						4
					</Button>
					<Button variant={'primary'} theme={currentTheme} handleClickEvent={() => handleNumberClick('5')}>
						5
					</Button>
					<Button variant={'primary'} theme={currentTheme} handleClickEvent={() => handleNumberClick('6')}>
						6
					</Button>
					<Button variant={'primary'} theme={currentTheme} handleClickEvent={() => handleOperatorClick('+')}>
						+
					</Button>

					<Button variant={'primary'} theme={currentTheme} handleClickEvent={() => handleNumberClick('1')}>
						1
					</Button>
					<Button variant={'primary'} theme={currentTheme} handleClickEvent={() => handleNumberClick('2')}>
						2
					</Button>
					<Button variant={'primary'} theme={currentTheme} handleClickEvent={() => handleNumberClick('3')}>
						3
					</Button>
					<Button variant={'primary'} theme={currentTheme} handleClickEvent={() => handleOperatorClick('-')}>
						-
					</Button>

					<Button variant={'primary'} theme={currentTheme} handleClickEvent={() => handleNumberClick('.')}>
						.
					</Button>
					<Button variant={'primary'} theme={currentTheme} handleClickEvent={() => handleNumberClick('0')}>
						0
					</Button>
					<Button variant={'primary'} theme={currentTheme} handleClickEvent={() => handleOperatorClick('/')}>
						/
					</Button>
					<Button variant={'primary'} theme={currentTheme}  handleClickEvent={() => handleOperatorClick('*')}>
						x
					</Button>

					<div className="flex flex-row gap-20 col-span-full flex-nowrap">
						<Button variant={'secondary'} theme={currentTheme}  handleClickEvent={handleResetClick}>
							reset
						</Button>
						<Button variant={'ternary'} theme={currentTheme} handleClickEvent={handleEqualClick}>
							=
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
