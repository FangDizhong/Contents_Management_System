import { ILoginState } from "./login/types"
import { IDashboardState } from "./main/analysis/types"
import { ISystemState } from "./main/system/types"

export interface IRootState {
  name: string
  age: number
  entireDepartmentList: any[]
  entireRoleList: any[]
  entireMenuList: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
  dashboard: IDashboardState
}

// 交叉合并两个类型
export type IStoreType = IRootState & IRootWithModule
