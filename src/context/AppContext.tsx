import { createContext, useState }  from "react";
import { Actions, AppState }        from "../interfaces/MyCardInterface";

type AppProviderProps = {
    children: React.ReactNode
}
  
  const AppStateInitial: AppState[]  = [
    {state: "warning", active: false},
    {state: "success", active: false},
    {state: "error", active: false},
  ];
  
export const AppContext = createContext({stateApp: AppStateInitial} as Actions);

export const AppProvider = ({children}: AppProviderProps) => {
    const [stateApp, setStateApp] = useState(AppStateInitial);

   /**
   * Handle view card according to state "warning" | "success" | "error"
   */
    const open = (state: string) => {
        const newState = stateApp.map(item => {
            if(item.state === state){
                return {
                state,
                active: true
                }
            }else{
                return item;
            }
        });
        setStateApp(newState);
    }

    const erase = () => {
        // Erase something...
        cancel();
    }

    /**
     * Close modal
     */
    const cancel = () => {
        const newState = stateApp.map(item => ({...item, active: false}));
        setStateApp(newState);
    }

    return (
        <AppContext.Provider value={{
            open,
            erase,
            cancel,
            stateApp
        }}>
            {children}
        </AppContext.Provider>
    );
}