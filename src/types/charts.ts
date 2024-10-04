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

export type ApiDailyBarChartProps = {
  activity: {
    sessions: DailyActivitiesProps[]
  }
}

export type MockDailyBarChartProps = {
  sessions: DailyActivitiesProps[]
}

export type SessionsDurationProps = {
  day: number
  sessionLength: number
}

export type ApiSessionsLineChartProps = {
  sessions: SessionsDurationProps[]
}

export type MockSessionsLineChartProps = {
  averageSessions: SessionsDurationProps[]
}

type PerformanceDataProps = {
  value: number
  kind: number
}

export type ApiPerformanceRadarChartProps = {
  kind: { [key: number]: string }
  data: PerformanceDataProps[]
}

export type MockPerformanceRadarChartProps = {
  performance: ApiPerformanceRadarChartProps
}
