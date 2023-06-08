import clsx from 'clsx';
import { useStore } from '../../lib/store'
import { shallow } from 'zustand/shallow';

export default function ThemeSwitch() {
	const themes = ['dark', 'light', 'purple'];
	const [currentTheme, setCurrentTheme] = useStore(
		({ currentTheme, setCurrentTheme }) => [currentTheme, setCurrentTheme],
		shallow
	)

	const switchTheme = (theme: string) => {
		setCurrentTheme(theme);
	};

	return (
		<div className="flex flex-row items-center justify-between flex-nowrap">
			<h2 className="font-bold uppercase text-32">Calc</h2>
			<div className="flex flex-row items-center flex-nowrap">
				<span className="font-bold uppercase text-12 mr-26 pt-15">Theme</span>

				<div className="flex flex-col justify-center">
					<div className="flex flex-row justify-center mb-5 gap-x-10 flex-nowrap px-7">
						{themes.map((theme, index, _key) => (
							<button className="font-bold uppercase text-12" key={_key} onClick={() => switchTheme(theme)}>
								{index + 1}
							</button>
						))}
					</div>
					<div className={
						clsx(
							'relative flex flex-row items-center rounded-xl h-26 flex-nowrap w-50 transition-bg duration-500',
							currentTheme === 'dark' && ' bg-ebonyclay',
							currentTheme === 'light' && ' bg-swisscoffee',
							currentTheme === 'purple' && 'bg-violet'
						)
					}>
						{themes.map((theme, _key) => (
							<button className="w-[30%] h-full pointer-events-auto" key={_key} onClick={() => switchTheme(theme)}>
								<span className="sr-only">Theme {theme}</span>
							</button>
						))}
						<div
							className={clsx(
								'rounded-full w-16 h-16 absolute top-5 transition-all duration-500',
								currentTheme === 'dark' && 'bg-burntorange hover:bg-neoncarrot left-5',
								currentTheme === 'light' && ' bg-persianred hover:bg-carnation left-18',
								currentTheme === 'purple' && 'bg-robinseggblue left-30'
							)}
						></div>
					</div>
				</div>
			</div>
		</div>
	);
}
