import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Rutas from "./routes/Rutas"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
          <Rutas/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
