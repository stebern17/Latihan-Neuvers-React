import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Header from "./Blocks/Header"
import Footer from "./Blocks/Footer"
import Prices from "./pages/Prices"
import About from "./pages/About"


export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Prices" element={<Prices />}/>
      <Route path="/About" element={<About />}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}
