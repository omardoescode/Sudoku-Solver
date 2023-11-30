import React from "react"
import Navbar from "./components/Navbar"
import Grid from "./components/Grid"
import ValButtons from "./components/ValButtons"
import GridProvider from "./context/grid"

function App() {
  return (
    <GridProvider>
      <Navbar />
      <Grid />
      <ValButtons />
    </GridProvider>
  )
}

export default App
