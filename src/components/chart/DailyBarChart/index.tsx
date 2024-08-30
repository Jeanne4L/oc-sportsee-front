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

import { DailyActivitiesType } from '../../../types/charts'
import CustomLegend from './CustomLegend'
import CustomTooltip from './CustomTooltip'

type DailyBarChartType = {
	data: DailyActivitiesType[]
}

const DailyBarChart = ({ data }: DailyBarChartType) => {
	return (
		<ResponsiveContainer className='bg-lightGrey rounded-sm pt-m !h-chart-height xl:!h-chart-desktop-height'>
			<BarChart
				data={data}
				margin={{
					top: 32,
					right: 0,
					left: 0,
					bottom: 5,
				}}
				barGap={8}
				barSize={8}
			>
				<Legend
					wrapperStyle={{ position: 'static' }}
					iconType='circle'
					iconSize={8}
					className='-mt-l pr-l'
					formatter={CustomLegend}
					align='right'
				/>
				<CartesianGrid vertical={false} strokeDasharray='3' />
				<XAxis
					axisLine={false}
					tickLine={false}
					tickFormatter={(tick) => tick + 1}
					tickMargin={16}
					stroke='#9B9EAC'
				/>
				<YAxis yAxisId='left' orientation='left' stroke='#9B9EAC' hide={true} />
				<YAxis
					yAxisId='right'
					orientation='right'
					stroke='#9B9EAC'
					axisLine={false}
					tickLine={false}
				/>
				<Tooltip
					wrapperStyle={{ background: '#E60000' }}
					labelStyle={{ display: 'none' }}
					content={<CustomTooltip />}
				/>

				<Bar
					yAxisId='left'
					dataKey='kilogram'
					fill='#282D30'
					radius={[8, 8, 0, 0]}
				/>
				<Bar
					yAxisId='right'
					dataKey='calories'
					fill='#E60000'
					radius={[8, 8, 0, 0]}
				/>
			</BarChart>
		</ResponsiveContainer>
	)
}

export default DailyBarChart
