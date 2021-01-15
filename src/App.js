import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Results from './components/Results'
import requests from './requests'

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fechTrending)
  return (
    <div className='app'>
      <Header />
      <NavBar setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  )
}

export default App
