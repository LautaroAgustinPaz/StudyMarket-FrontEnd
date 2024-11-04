import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import './index.css';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;