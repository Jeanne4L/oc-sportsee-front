import {
	LineChart,
	Line,
	XAxis,
	Tooltip,
	ResponsiveContainer,
	TooltipProps,
	Legend,
} from 'recharts'

import { SessionsDurationType } from '../../../types/charts'

type SessionsLineChartType = {
	data: SessionsDurationType[]
}

const weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
	active,
	payload,
}) => {
	if (active && payload && payload.length) {
		return (
			<div className='text-center px-s py-xs bg-white'>
				<span className='text-black text-xs font-medium'>{`${payload[0].value} min`}</span>
			</div>
		)
	}

	return null
}

const CustomLegend = () => {
	return (
		<span
			className='font-medium text-s'
			style={{ color: 'rgba(255,255,255,0.5)' }}
		>
			Durée moyenne des <br />
			sessions
		</span>
	)
}

const SessionsLineChart = ({ data }: SessionsLineChartType) => {
	return (
		<ResponsiveContainer width='33%' height={200} className='bg-red rounded-sm'>
			<LineChart
				width={500}
				height={200}
				data={data}
				margin={{
					top: 16,
					right: 24,
					left: 24,
					bottom: 16,
				}}
			>
				<Legend verticalAlign='top' align='left' content={CustomLegend} />
				<XAxis
					dataKey='day'
					axisLine={false}
					tickLine={false}
					tickFormatter={(tick) =>
						tick > 7 ? weekDays[tick - 7] : weekDays[tick - 1]
					}
					tick={{ fontSize: 12 }}
					tickMargin={16}
					stroke='rgba(255,255,255,0.5)'
					interval={'preserveStartEnd'}
				/>
				<Tooltip content={<CustomTooltip />} />
				<Line
					type='monotone'
					dataKey='sessionLength'
					stroke='rgba(255,255,255,0.5)'
					strokeWidth={3}
					dot={false}
					activeDot={{
						fill: '#fff',
						stroke: 'rgba(255,255,255,0.5)',
						strokeWidth: 16,
						r: 8,
					}}
				/>
			</LineChart>
		</ResponsiveContainer>
	)
}

export default SessionsLineChart
