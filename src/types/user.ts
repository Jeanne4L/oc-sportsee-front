type UserInfos = {
  firstName: string
  lastName: string
  age: number
}

export type KeyData = {
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
export class UserDataFormatter {
  static format(data: UserApiData): UserData {
    if (data.todayScore) {
      return {
        id: data.id,
        userInfos: data.userInfos,
        score: data.todayScore,
        keyData: data.keyData,
      }
    } else {
      return {
        id: data.id,
        userInfos: data.userInfos,
        score: data.score ?? 0,
        keyData: data.keyData,
      }
    }
  }
}
