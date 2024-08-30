type StatCardType = {
	Icon: JSX.Element
	data: string
	label: string
	color: string
}

const StatCard = ({ Icon, data, label, color }: StatCardType) => {
	return (
		<div className='w-fit min-w-stat-card flex bg-lightGrey rounded-sm p-s gap-6'>
			<div
				className={`p-s bg-${color} w-14 h-14 flex justify-center items-center rounded-sm`}
			>
				{Icon}
			</div>
			<div className='flex flex-col'>
				<span className='text-base font-bold text-black'>{data}</span>
				<span className='text-grey font-medium text-s'>{label}</span>
			</div>
		</div>
	)
}

export default StatCard
