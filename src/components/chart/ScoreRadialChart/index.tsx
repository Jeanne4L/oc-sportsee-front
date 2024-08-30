import {
	RadialBarChart,
	RadialBar,
	ResponsiveContainer,
	Legend,
} from 'recharts'
import useWindowSize from '../../../helpers/useWindowSize'
import CustomLabel from './CustomLabel'
import CustomLegend from './CustomLegend'

type ScoreRadialChartType = {
	data: {
		score: number
	}[]
}

const ScoreRadialChart = ({ data }: ScoreRadialChartType) => {
	const newUserData = { ...data[0], fill: '#FF0101' }
	const newData = [
		newUserData,
		{
			score: 100,
			fill: 'rgba(0,0,0, 0)',
		},
	]

	const [width] = useWindowSize()
	const labelDimensions = width >= 1280 ? 160 : 100
	const labelGap = width >= 1280 ? 80 : 50

	return (
		<ResponsiveContainer
			width='33%'
			className='bg-lightGrey rounded-sm !h-chart-height xl:!h-chart-desktop-height'
		>
			<RadialBarChart
				cx='50%'
				cy='50%'
				innerRadius='74%'
				outerRadius='94%'
				barSize={10}
				data={newData}
				margin={{ top: 16, right: 24, bottom: 16, left: 24 }}
			>
				<Legend verticalAlign='top' align='left' content={CustomLegend} />
				<RadialBar
					fill='#FF0101'
					dataKey='score'
					label={(props) => (
						<CustomLabel
							{...props}
							score={newUserData.score}
							labelGap={labelGap}
							labelDimensions={labelDimensions}
						/>
					)}
					cornerRadius={50}
				/>
			</RadialBarChart>
		</ResponsiveContainer>
	)
}

export default ScoreRadialChart
