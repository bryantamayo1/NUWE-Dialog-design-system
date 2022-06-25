export interface MyCardProps{
    state: "warning" | "success" | "error",
    title?: string,
    subtitle?: string
  }
  
export interface Actions{
  open: (status: string) => void,
  erase?: () => void,
  cancel?: () => void,
  stateApp: AppState[]
}

export interface AppState{
  state: MyCardProps["state"],
  active: boolean
}