import {
  ApiDailyBarChartProps,
  MockDailyBarChartProps,
  DailyActivitiesProps,
} from '../../types/charts'

export class DailyDataFormatter {
  static format(
    data: ApiDailyBarChartProps | MockDailyBarChartProps
  ): MockDailyBarChartProps {
    let sessions: DailyActivitiesProps[] | undefined

    if ('activity' in data) {
      sessions = data.activity.sessions
    } else {
      sessions = data.sessions
    }

    return { sessions: sessions ?? [] }
  }
}
