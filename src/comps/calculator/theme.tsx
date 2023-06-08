import clsx from 'clsx';
import { useState } from 'react';

export default function ThemeSwitch() {
	const themes = ['light', 'dark', 'purple'];
	const [currentTheme, setCurrentTheme] = useState(themes[0]);

	const switchTheme = (theme: string) => {
		setCurrentTheme(theme);
		console.log(theme);
	};

	return (
		<div className="flex flex-row items-center justify-between flex-nowrap">
			<h2 className="font-bold uppercase text-32">Calc</h2>
			<div className="flex flex-row items-center flex-nowrap">
				<span className="font-bold uppercase text-12 mr-26">Theme</span>

				<div className="flex flex-col justify-center">
					<div className="flex flex-row justify-center mb-5 gap-x-10 flex-nowrap px-7">
						{themes.map((theme, index, _key) => (
							<button className="font-bold uppercase text-12" key={_key} onClick={() => switchTheme(theme)}>
								{index + 1}
							</button>
						))}
					</div>
					<div className="relative flex flex-row items-center bg-ebonyclay rounded-xl h-26 flex-nowrap w-50">
						{themes.map((theme, _key) => (
							<button className="w-[30%] h-full" key={_key} onClick={() => switchTheme(theme)}>
								<span className="sr-only">Theme {theme}</span>
							</button>
						))}
						<div
							className={clsx(
								'rounded-full w-16 h-16 absolute pointer-events-none top-5 transition-all duration-500',
								currentTheme === 'light' && 'bg-pearlbush left-5',
								currentTheme === 'dark' && 'bg-lynch left-18',
								currentTheme === 'purple' && 'bg-persianred left-30'
							)}
						></div>
					</div>
				</div>
			</div>
		</div>
	);
}
