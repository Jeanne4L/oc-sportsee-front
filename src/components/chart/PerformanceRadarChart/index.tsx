import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	ResponsiveContainer,
} from 'recharts'

import { PerformanceRadarChartType } from '../../../types/charts'
import useWindowSize from '../../../helpers/useWindowSize'
import translateKinds from './helpers/translateKinds'

const PerformanceRadarChart = ({
	data,
	kind: kindArray,
}: PerformanceRadarChartType) => {
	const kindArrayFr = translateKinds({ kindArray })

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
					tickFormatter={(tick) => kindArrayFr[tick]}
				/>
				<Radar dataKey='value' fill='#FF0101' fillOpacity={0.7} />
			</RadarChart>
		</ResponsiveContainer>
	)
}

export default PerformanceRadarChart
