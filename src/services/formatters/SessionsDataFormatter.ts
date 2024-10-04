import {
  ApiSessionsLineChartProps,
  MockSessionsLineChartProps,
  SessionsDurationProps,
} from '../../types/charts'

export class SessionsDataFormatter {
  static format(
    data: ApiSessionsLineChartProps | MockSessionsLineChartProps
  ): ApiSessionsLineChartProps {
    let sessions: SessionsDurationProps[]

    if ('sessions' in data) {
      sessions = data.sessions
    } else {
      sessions = data.averageSessions
    }

    return { sessions: sessions ?? [] }
  }
}
