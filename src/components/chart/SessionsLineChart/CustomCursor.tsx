import { Rectangle } from 'recharts'

type CustomCursorProps = {
	points?: Array<{ x: number; y: number }>
}

const CustomCursor: React.FC<CustomCursorProps> = (props) => {
	const { points } = props

	if (!points || points.length === 0) return null
	const { x } = points[0]

	return (
		<Rectangle fill='rgba(0,0,0,0.1)' x={x} y={0} width={350} height={350} />
	)
}

export default CustomCursor
