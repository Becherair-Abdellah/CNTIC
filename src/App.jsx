import React from 'react'
import { BrowserRouter as Router ,Routes , Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Posts from './components/pages/Posts'
import ContactUs from './components/pages/ContactUs'
function App() {
  return (
    
    <Router>
      <Routes>
        <Route exact path="/" element={<Posts/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/contact" element={<ContactUs/>} />
      </Routes>
    </Router>
    
  )
}

export default App

