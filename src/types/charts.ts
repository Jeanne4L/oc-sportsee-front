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

export type DailyActivitiesProps = {
	day: Date
	kilogram: number
	calories: number
}

export type SessionsDurationProps = {
	day: number
	sessionLength: number
}

type PerformanceDataProps = {
	value: number
	kind: number
}

export type PerformanceRadarChartProps = {
	kind: { [key: string]: string }
	data: PerformanceDataProps[]
}
