import { BrowserRouter, Routes, Router} from "react-router-dom"
import Home from "./pages/Home"


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Router path="/" element={<Home />}/>
    </Routes>
    </BrowserRouter>
  )
}
