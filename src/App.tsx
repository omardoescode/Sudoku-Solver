import React from "react"
import Navbar from "./components/Navbar"
import Grid from "./components/Grid"
import ValButtons from "./components/ValButtons"
import GridProvider from "./context/grid"
import GlobalsProvidor from "./context/globals"

function App() {
  return (
    <GlobalsProvidor>
      <GridProvider>
        <Navbar />
        <Grid />
        <ValButtons />
      </GridProvider>
    </GlobalsProvidor>
  )
}

export default App
