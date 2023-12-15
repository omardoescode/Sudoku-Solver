import Navbar from "./components/Navbar"
import ValButtons from "./components/ValButtons"
import GridProvider from "./context/grid"
import GlobalsProvidor, { GlobalsContext } from "./context/globals"
import AskingName from "./components/Pages/AskingName"
import CurrentPage from "./components/CurrentPage"
import Sidebar from "./components/Sidebar"
import { ThemeProvider } from "./components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <GlobalsProvidor>
        <GridProvider>
          <Sidebar />
          <Navbar />
          <CurrentPage />
        </GridProvider>
      </GlobalsProvidor>
    </ThemeProvider>
  )
}

export default App
