import { TooltipProps } from 'recharts'

const SessionsLineChartCustomTooltip: React.FC<
	TooltipProps<number, string>
> = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<div className='text-center px-s py-xs bg-white'>
				<span className='text-black text-xs font-medium'>{`${payload[0].value} min`}</span>
			</div>
		)
	}

	return null
}

export default SessionsLineChartCustomTooltip
