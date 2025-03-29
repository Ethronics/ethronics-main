import { Footer } from "./components/layout/Footer"
import { Navbar } from "./components/layout/Navbar"
import { Home } from "./pages/Home"


function App() {

  return (
    <div className="App">
      <Navbar />
        <Home />
      <Footer />
    </div>
  )
}

export default App
