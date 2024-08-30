export type StatData = {
	unit: string
	label: string
	icon: JSX.Element
	color: string
}

export type Stats = {
	calorieCount: StatData
	proteinCount: StatData
	carbohydrateCount: StatData
	lipidCount: StatData
}

export type StatsArrayItem = {
	value: number
	unit: string
	label: string
	icon: JSX.Element
	color: string
}

export type DailyActivitiesType = {
	day: Date
	kilogram: number
	calories: number
}

export type SessionsDurationType = {
	day: number
	sessionLength: number
}

type PerformanceDataType = {
	value: number
	kind: number
}

export type PerformanceRadarChartType = {
	kind: { [key: string]: string }
	data: PerformanceDataType[]
}
