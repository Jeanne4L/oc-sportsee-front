import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	ResponsiveContainer,
} from 'recharts'

import { PerformanceRadarChartType } from '../../../types/charts'

const PerformanceRadarChart = ({
	data,
	kind: kindArray,
}: PerformanceRadarChartType) => {
	const kindTranslations: { [key: string]: string } = {
		cardio: 'Cardio',
		energy: 'Énergie',
		endurance: 'Endurance',
		strength: 'Force',
		speed: 'Vitesse',
		intensity: 'Intensité',
	}

	const kindArrayFr = Object.keys(kindArray).reduce(
		(acc: { [key: string]: string }, key) => {
			acc[key] = kindTranslations[kindArray[key]]
			return acc
		},
		{}
	)

	return (
		<ResponsiveContainer
			width='33%'
			height={200}
			className='bg-greyChartBg rounded-sm'
		>
			<RadarChart outerRadius={50} cx='50%' cy='50%' data={data}>
				<PolarGrid radialLines={false} stroke='#fff' />
				<PolarAngleAxis
					dataKey='kind'
					type='category'
					tick={{
						fill: '#fff',
						fontSize: '12px',
					}}
					tickFormatter={(tick) => kindArrayFr[tick]}
				/>
				<Radar dataKey='value' fill='#FF0101' fillOpacity={0.7} />
			</RadarChart>
		</ResponsiveContainer>
	)
}

export default PerformanceRadarChart
