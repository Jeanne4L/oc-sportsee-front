const CustomLegend = (value: string) => {
	const legendValue =
		value == 'kilogram' ? 'Poids (kg)' : 'Calories brûlées (kCal)'

	return <span className='text-grey text-s'>{legendValue}</span>
}

export default CustomLegend
