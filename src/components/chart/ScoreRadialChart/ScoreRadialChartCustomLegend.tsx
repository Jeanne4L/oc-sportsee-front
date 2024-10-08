type CustomLegendProps = {
	score: number
}
const ScoreRadialChartCustomLegend = ({ score }: CustomLegendProps) => {
	return (
		<p className='text-m font-medium text-grey text-center'>
			<span className='text-lg font-bold text-black'>{score}%</span>
			<br />
			de votre
			<br />
			objectif
		</p>
	)
}

export default ScoreRadialChartCustomLegend
