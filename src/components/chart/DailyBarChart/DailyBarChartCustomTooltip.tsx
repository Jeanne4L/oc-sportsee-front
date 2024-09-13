import { TooltipProps } from 'recharts'

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
	active,
	payload,
}) => {
	if (active && payload && payload.length) {
		return (
			<div className='flex flex-col gap-s text-center p-s'>
				<span className='text-white text-xs'>{`${payload[0].value}kg`}</span>
				<span className='text-white text-xs'>{`${payload[1].value}Kcal`}</span>
			</div>
		)
	}

	return null
}

export default CustomTooltip
