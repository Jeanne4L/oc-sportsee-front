import React from 'react'

type CustomizedLabelProps = {
	cx: number
	cy: number
}

type CustomLabelProps = CustomizedLabelProps & {
	score: number
	labelGap: number
	labelDimensions: number
}

const CustomLabel: React.FC<CustomLabelProps> = ({
	cx,
	cy,
	score,
	labelGap,
	labelDimensions,
}) => {
	const x = cx
	const y = cy

	return (
		<>
			<rect
				x={x - labelGap}
				y={y - labelGap}
				width={labelDimensions}
				height={labelDimensions}
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
					{score}%
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

export default CustomLabel
