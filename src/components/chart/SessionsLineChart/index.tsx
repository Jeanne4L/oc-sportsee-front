import { useState } from 'react'
import {
	LineChart,
	Line,
	XAxis,
	Tooltip,
	ResponsiveContainer,
	Legend,
} from 'recharts'

import { SessionsDurationProps } from '../../../types/charts'
import CustomLegend from './SessionsLineChartCustomLegend'
import CustomTooltip from './SessionsLineChartCustomTooltip'
import CustomCursor from './SessionsLineChartCustomCursor'

type SessionsLineChartProps = {
	data: SessionsDurationProps[]
}

type StateProps = {
	activeTooltipIndex?: number
}

const locales = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

const SessionsLineChart = ({ data }: SessionsLineChartProps) => {
	const [perc, setPerc] = useState(100)

	const handleMouseMove = (state: StateProps) => {
		if (state && state.activeTooltipIndex !== undefined) {
			const index = state.activeTooltipIndex
			const percentage = ((data.length - index - 1) * 100) / (data.length - 1)

			setPerc(100 - percentage)
		} else {
			setPerc(100)
		}
	}

	const handleMouseLeave = () => {
		setPerc(100)
	}

	const gradientId = 'lineGradient'

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
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
			>
				<Legend verticalAlign='top' align='left' content={CustomLegend} />
				<Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
				<XAxis
					dataKey='day'
					axisLine={false}
					tickLine={false}
					tickFormatter={(tick) =>
						tick > 7 ? locales[tick - 7] : locales[tick - 1]
					}
					tick={{ fontSize: 12 }}
					tickMargin={16}
					stroke='rgba(255,255,255,0.5)'
					interval={'preserveStartEnd'}
				/>
				<defs>
					<linearGradient id={gradientId} x1='0%' y1='0' x2='101%' y2='0'>
						<stop offset='0%' stopColor='rgba(255,255,255,0.5)' />
						<stop offset={`${perc}%`} stopColor='rgba(255,255,255,0.5)' />
						<stop offset={`${perc}%`} stopColor='white' />
						<stop offset={`${100}%`} stopColor='white' />
					</linearGradient>
				</defs>
				<Line
					type='monotone'
					dataKey='sessionLength'
					stroke={`url(#${gradientId})`}
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
