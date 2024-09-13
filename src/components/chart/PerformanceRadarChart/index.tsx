import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	ResponsiveContainer,
} from 'recharts'

import { PerformanceRadarChartProps } from '../../../types/charts'
import useWindowSize from '../../../helpers/useWindowSize'

const locales = [
	'Cardio',
	'Énergie',
	'Endurance',
	'Force',
	'Vitesse',
	'Intensité',
]

const PerformanceRadarChart = ({ data }: PerformanceRadarChartProps) => {
	const [width] = useWindowSize()
	const outerRadius = width >= 1280 ? 80 : 50

	return (
		<ResponsiveContainer
			width='33%'
			className='bg-greyChartBg rounded-sm !h-chart-height xl:!h-chart-desktop-height'
		>
			<RadarChart outerRadius={outerRadius} cx='50%' cy='50%' data={data}>
				<PolarGrid radialLines={false} stroke='#fff' />
				<PolarAngleAxis
					dataKey='kind'
					type='category'
					tick={{
						fill: '#fff',
						fontSize: '12px',
					}}
					tickFormatter={(tick) => locales[tick - 1]}
				/>
				<Radar dataKey='value' fill='#FF0101' fillOpacity={0.7} />
			</RadarChart>
		</ResponsiveContainer>
	)
}

export default PerformanceRadarChart
