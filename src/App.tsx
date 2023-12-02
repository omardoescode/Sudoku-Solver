import Navbar from "./components/Navbar"
import ValButtons from "./components/ValButtons"
import GridProvider from "./context/grid"
import GlobalsProvidor, { GlobalsContext } from "./context/globals"
import AskingName from "./components/Pages/AskingName"
import CurrentPage from "./components/CurrentPage"

function App() {
  return (
    <GlobalsProvidor>
      <GridProvider>
        <Navbar />
        <CurrentPage />
      </GridProvider>
    </GlobalsProvidor>
  )
}

export default App
