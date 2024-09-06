const getDayInDate = (date: Date) => {
	const dateObject = new Date(date)
	const day = dateObject.getDate()

	return day
}

export default getDayInDate
