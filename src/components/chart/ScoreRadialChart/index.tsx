import {
	RadialBarChart,
	RadialBar,
	ResponsiveContainer,
	Legend,
} from 'recharts'

type ScoreRadialChartType = {
	data: {
		score: number
	}[]
}

type CustomizedLabelProps = {
	cx: number
	cy: number
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

	const renderCustomizedLabel = ({ cx, cy }: CustomizedLabelProps) => {
		const x = cx
		const y = cy

		return (
			<>
				<rect
					x={x - 50}
					y={y - 50}
					width={100}
					height={100}
					fill='#fff'
					rx={1000}
				/>
				<text
					x={x}
					y={y}
					fill='#282D30'
					textAnchor='middle'
					dominantBaseline='central'
					style={{
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<tspan
						x={x}
						y={y}
						dy='-26'
						style={{ fontSize: '24px', fontWeight: 700 }}
					>
						{newUserData.score}%
					</tspan>
					<tspan
						x={x}
						y={y}
						dy='0'
						style={{
							fontSize: '14px',
							fill: '#74798C',
							fontWeight: 500,
						}}
					>
						de votre
					</tspan>
					<tspan
						x={x}
						y={y}
						dy='22'
						style={{
							fontSize: '14px',
							fill: '#74798C',
							fontWeight: 500,
						}}
					>
						objectif
					</tspan>
				</text>
			</>
		)
	}

	const CustomLegend = () => {
		return <span className='text-greyChartBg font-medium text-s'>Score</span>
	}

	return (
		<ResponsiveContainer
			width='33%'
			height={200}
			className='bg-lightGrey rounded-sm'
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
					label={renderCustomizedLabel}
					cornerRadius={50}
				/>
			</RadialBarChart>
		</ResponsiveContainer>
	)
}

export default ScoreRadialChart
