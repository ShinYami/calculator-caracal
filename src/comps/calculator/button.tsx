import { clsx } from 'clsx';

export default function Button({ children, variant, handleClickEvent, theme }) {
	const variants = {
		primary: clsx(
			theme === 'dark' && 'bg-pearlbush border-b-napa border-b-4 text-riverbed text-32 sm:text-40 hover:bg-blackwhite',
			theme === 'light' && 'bg-pearlbush border-b-napa border-b-4 text-riverbed text-32 sm:text-40 hover:bg-blackwhite',
			theme === 'purple' && 'bg-grape border-b-napa border-b-4 text-brightsun text-32 sm:text-40 hover:bg-blackwhite',
		),
		secondary: clsx(
			theme === 'dark' && 'bg-lynch border-b-eastbay border-b-4 text-white text-20 sm:text-28 hover:bg-coldpurple',
			theme === 'light' && 'bg-paradiso border-b-napa border-b-4 text-white text-20 sm:text-28  hover:bg-blackwhite',
			theme === 'purple' && 'bg-windsor border-b-napa border-b-4 text-white text-20 sm:text-28  hover:bg-blackwhite',
		),
		ternary: clsx(
			theme === 'dark' && 'bg-persianred border-b-oldbrick border-b-4 text-20 sm:text-28  hover:bg-carnation',
			theme === 'light' && 'bg-burntorange border-b-napa border-b-4 text-white text-20 sm:text-28  hover:bg-blackwhite',
			theme === 'purple' && 'bg-robinseggblue border-b-napa border-b-4 text-white text-20 sm:text-28  hover:bg-blackwhite',
		),
	}

	return (
		<button
			className={clsx(
				'rounded-xl uppercase font-bold flex justify-center items-center w-full h-64 active:scale-95 transition-background transition-color duration-500 ease-in-out',
				variants[variant],
			)}
			onClick={handleClickEvent}
		>
			{children}
		</button>
	);
}
