import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	TooltipProps,
} from 'recharts'

import { DailyActivitiesType } from '../../../types/charts'

type DailyBarChartType = {
	data: DailyActivitiesType[]
}

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

const CustomLegend = (value: string) => {
	const legendValue =
		value == 'kilogram' ? 'Poids (kg)' : 'Calories brûlées (kCal)'

	return <span className='text-grey text-s'>{legendValue}</span>
}

const DailyBarChart = ({ data }: DailyBarChartType) => {
	return (
		<ResponsiveContainer
			width={'100%'}
			height={200}
			className='bg-lightGrey rounded-sm pt-m'
		>
			<BarChart
				data={data}
				margin={{
					top: 32,
					right: -8,
					left: 16,
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
