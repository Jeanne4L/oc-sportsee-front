import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts'

import { DailyActivitiesProps } from '../../../types/charts'
import CustomLegend from './DailyBarChartCustomLegend'
import CustomTooltip from './DailyBarChartCustomTooltip'
import getDayInDate from './helpers/getDayInDate'

type DailyBarChartProps = {
	data: DailyActivitiesProps[]
}

const DailyBarChart = ({ data }: DailyBarChartProps) => {
	const formattedData = data.map((d) => ({
		...d,
		day: getDayInDate(d.day),
	}))

	return (
		<div className='bg-lightGrey rounded-sm pt-sidebar-width pb-m pl-m !h-chart-desktop-height relative'>
			<span className='text-greyChartBg font-medium text-s xl:text-base absolute top-xl left-m'>
				Activité quotidienne
			</span>
			<ResponsiveContainer>
				<BarChart
					data={formattedData}
					margin={{
						top: 0,
						right: 0,
						left: 0,
						bottom: 5,
					}}
					barGap={8}
					barSize={8}
				>
					<Legend
						wrapperStyle={{ top: '-34px', right: '16px' }}
						iconType='circle'
						iconSize={8}
						formatter={CustomLegend}
						align='right'
						verticalAlign='top'
					/>
					<CartesianGrid vertical={false} strokeDasharray='3' />
					<XAxis
						dataKey='day'
						axisLine={false}
						tickLine={false}
						tickMargin={16}
						stroke='#9B9EAC'
					/>
					<YAxis
						dataKey='calories'
						yAxisId='left'
						orientation='left'
						stroke='#9B9EAC'
						hide={true}
					/>
					<YAxis
						dataKey='kilogram'
						yAxisId='right'
						orientation='right'
						stroke='#9B9EAC'
						axisLine={false}
						tickLine={false}
					/>
					<Tooltip
						cursor={{ fill: '#C4C4C4', opacity: 0.5 }}
						wrapperStyle={{ background: '#E60000' }}
						labelStyle={{ display: 'none' }}
						content={<CustomTooltip />}
						offset={16}
					/>
					<Bar
						yAxisId='right'
						dataKey='kilogram'
						fill='#282D30'
						radius={[8, 8, 0, 0]}
					/>
					<Bar
						yAxisId='left'
						dataKey='calories'
						fill='#E60000'
						radius={[8, 8, 0, 0]}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	)
}

export default DailyBarChart
