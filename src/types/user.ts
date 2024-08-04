type UserInfos = {
	firstName: string
	lastName: string
	age: number
}

type KeyData = {
	calorieCount: number
	proteinCount: number
	carbohydrateCount: number
	lipidCount: number
}

export type UserApiData = {
	id: number
	userInfos: UserInfos
	score?: number
	todayScore?: number
	keyData: KeyData
}

export type UserData = {
	id: number
	userInfos: UserInfos
	score: number
	keyData: KeyData
}
