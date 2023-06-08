import { clsx } from 'clsx';

export default function Header({ value, theme }) {
	return (
		<div className={clsx(
			'px-32 py-40 mt-32 mb-24 rounded-xl transition-all duration-500',
			theme === 'dark' && 'bg-mirage',
			theme === 'light' && 'bg-gallery',
			theme === 'purple' && 'bg-violet'
		)}>
			<div className="flex justify-end font-bold text-56">{value}</div>
		</div>
	);
}
