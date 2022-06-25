import { AppProvider }  from './context/AppContext'
import { Main }         from './pages/Main'

export const App = () => {
  return (
    <AppProvider>
        <Main/>
    </AppProvider>
  )
}
