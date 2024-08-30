import Apple from '../../../components/icon/apple'
import Burger from '../../../components/icon/burger'
import Flame from '../../../components/icon/flame'
import Meat from '../../../components/icon/meat'
import { Stats, StatsArrayItem } from '../../../types/charts'
import { KeyData } from '../../../types/user'

export const statsData: Stats = {
	calorieCount: {
		unit: 'kCal',
		label: 'Calories',
		icon: <Flame />,
		color: 'redBg',
	},
	proteinCount: {
		unit: 'g',
		label: 'Protéines',
		icon: <Meat />,
		color: 'blueBg',
	},
	carbohydrateCount: {
		unit: 'g',
		label: 'Glucides',
		icon: <Apple />,
		color: 'yellowBg',
	},
	lipidCount: {
		unit: 'g',
		label: 'Lipides',
		icon: <Burger />,
		color: 'pinkBg',
	},
}

export const generateStatsArray = (stats: KeyData): StatsArrayItem[] => {
	return Object.entries(stats).map(([key, value]) => {
		const { unit, label, icon, color } = statsData[key as keyof Stats]
		return { value, unit, label, icon, color }
	})
}
