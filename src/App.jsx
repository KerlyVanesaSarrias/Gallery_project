import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NatuFive from './components/NatuFive'
import NatuFour from './components/NatuFour'
import NatuOne from './components/NatuOne'
import NatuSix from './components/NatuSix'
import NatuThree from './components/NatuThree'
import NatuTwo from './components/NatuTwo'
import { Navigation } from './components/Navigation'

function App() {


  return (

  <BrowserRouter>
      <Routes>
        <Route path="/natu1" element={<NatuOne className='main-img-container' />} />
        <Route path="/natu2" element={<NatuTwo className='main-img-container' />} />
        <Route path="/natu3" element={<NatuThree className='main-img-container' />} />
        <Route path="/natu4" element={<NatuFour className='main-img-container' />} />
        <Route path="/natu5" element={<NatuFive className='main-img-container' />} />
        <Route path="/natu6" element={<NatuSix className='main-img-container' />} />
      </Routes>
      <div className='container'>
          <Navigation />
        </div>
    </BrowserRouter>
  )
}

export default App
