import React from 'react'
import { BrowserRouter as Router ,Routes , Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Events from './components/pages/Events'
import ContactUs from './components/pages/ContactUs'
function App() {
  return (
      <Router>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Posts" element={<Events />} />
              <Route exact path="/contact" element={<ContactUs />} />
          </Routes>
      </Router>
  );
}

export default App

