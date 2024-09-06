import {
	RadialBarChart,
	RadialBar,
	ResponsiveContainer,
	Legend,
} from 'recharts'

import CustomLegend from './CustomLegend'

type ScoreRadialChartProps = {
	score: number
}

const ScoreRadialChart = ({ score }: ScoreRadialChartProps) => {
	const data = [
		{
			score,
			fill: '#FF0101',
		},
		{
			score: 100,
			fill: 'rgba(0,0,0, 0)',
		},
	]

	return (
		<div className='bg-lightGrey rounded-sm !h-chart-height xl:!h-chart-desktop-height w-2/6 relative'>
			<span className='text-greyChartBg font-medium text-s xl:text-base absolute top-s left-s xl:top-m xl:left-m'>
				Score
			</span>
			<ResponsiveContainer>
				<RadialBarChart
					cx='50%'
					cy='50%'
					innerRadius={75}
					outerRadius={95}
					barSize={10}
					data={data}
					margin={{ top: 16, right: 24, bottom: 16, left: 24 }}
				>
					<RadialBar fill='#FF0101' dataKey='score' cornerRadius={50} />
					<circle cx='50%' cy='50%' r='70' fill='white' />
					<Legend
						verticalAlign='middle'
						align='center'
						content={() => <CustomLegend score={score} />}
					/>
				</RadialBarChart>
			</ResponsiveContainer>
		</div>
	)
}

export default ScoreRadialChart
