type TranslateKindsType = {
	kindArray: { [key: string]: string }
}
const translateKinds = ({ kindArray }: TranslateKindsType) => {
	const kindTranslations: { [key: string]: string } = {
		cardio: 'Cardio',
		energy: 'Énergie',
		endurance: 'Endurance',
		strength: 'Force',
		speed: 'Vitesse',
		intensity: 'Intensité',
	}

	return Object.keys(kindArray).reduce(
		(acc: { [key: string]: string }, key) => {
			acc[key] = kindTranslations[kindArray[key]]
			return acc
		},
		{}
	)
}

export default translateKinds
