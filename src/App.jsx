import { useState, useEffect } from 'react'
import './App.css'
import BackToTop from './Component/BackToTop'
import JavascriptSection from './Component/JavascriptSection'
import Navbar from './Component/Navbar'
import ReactSection from './Component/ReactSection'
import Section from './Component/Section'
import Section2 from './Component/Section2'
import WhatsappButton from './Component/WhatsappButton'
import Loader from './Component/Loader'
import SearchBar from './Component/SearchBar'

function App() {
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [matchFound, setMatchFound] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])
    const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }


  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
        
          <Navbar />
          
          
         
<div className='main-content'>
          <Section  search={search} setMatchFound={setMatchFound}/>
          <Section2 search={search} setMatchFound = {setMatchFound} />
          <JavascriptSection search={search}setMatchFound = {setMatchFound} />
          <ReactSection  search={search} setMatchFound = {setMatchFound}/>
          </div>
          <WhatsappButton />
          <BackToTop />
          <footer style={{ textAlign: 'center', padding: '30px', color: '#888' }}>
            © {new Date().getFullYear()} Full Stack Roadmap by Abraham Ab
            
          </footer>
        </>
      )}
    </>
  )
}

export default App
