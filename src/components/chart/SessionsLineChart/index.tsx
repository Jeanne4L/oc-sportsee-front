import {
	LineChart,
	Line,
	XAxis,
	Tooltip,
	ResponsiveContainer,
	Legend,
} from 'recharts'

import { SessionsDurationType } from '../../../types/charts'
import CustomLegend from './CustomLegend'
import CustomTooltip from './CustomTooltip'

type SessionsLineChartType = {
	data: SessionsDurationType[]
}

const weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

const SessionsLineChart = ({ data }: SessionsLineChartType) => {
	return (
		<ResponsiveContainer
			width='33%'
			className='bg-red rounded-sm !h-chart-height xl:!h-chart-desktop-height'
		>
			<LineChart
				width={500}
				data={data}
				margin={{
					top: 16,
					right: 24,
					left: 24,
					bottom: 16,
				}}
				className='h-chart-height xl:!h-chart-desktop-height'
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
