export default function Header({ value }) {
	return (
		<div className="px-32 py-40 mt-32 mb-24 rounded-xl bg-mirage">
			<div className="flex justify-end font-bold text-56">{value}</div>
		</div>
	);
}
