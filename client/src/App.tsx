import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


function App() {

  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/result" element={<Result />} />
        {/* <Route path="/buy" element={<BuyCreds />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
