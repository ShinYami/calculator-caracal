import { clsx } from 'clsx';

export default function Calculator({ children, variant, handleClickEvent }) {
	return (
		<button
			className={clsx(
				'rounded-xl uppercase font-bold flex justify-center items-center w-full h-64 active:scale-95',
				variant === 'primary' && 'bg-pearlbush border-b-napa border-b-4 text-riverbed text-32 sm:text-40 hover:bg-blackwhite',
				variant === 'secondary' && 'bg-lynch border-b-eastbay border-b-4 text-white text-20 sm:text-28 hover:bg-coldpurple',
				variant === 'ternary' && 'bg-persianred border-b-oldbrick border-b-4 text-32 sm:text-40 hover:bg-carnation'
			)}
			onClick={handleClickEvent}
		>
			{children}
		</button>
	);
}
