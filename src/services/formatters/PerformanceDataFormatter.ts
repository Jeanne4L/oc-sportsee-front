import {
  ApiPerformanceRadarChartProps,
  MockPerformanceRadarChartProps,
} from '../../types/charts'

export class PerformanceDataFormatter {
  static format(
    data: ApiPerformanceRadarChartProps | MockPerformanceRadarChartProps
  ): ApiPerformanceRadarChartProps {
    let performances: ApiPerformanceRadarChartProps | undefined

    if ('performance' in data) {
      performances = data.performance
    } else {
      performances = data
    }

    return performances
  }
}
