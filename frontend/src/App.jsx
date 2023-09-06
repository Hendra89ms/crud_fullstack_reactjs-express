import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Coba from './components/coba/Coba'


function App() {

  return (
    <div className='w-full'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coba' element={<Coba />} />
      </Routes>
    </div>
  )
}

export default App