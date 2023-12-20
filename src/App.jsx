import React from 'react'
import Navbar from './components/PublicComponents/Navbar'
import { Outlet } from 'react-router'
import Footer from './components/PublicComponents/Footer'
export default function App() {
  return (
<<<<<<< HEAD
    <Provider store={store}>
      <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />}/>
        <Route exact path="/dashboard/signin" element={<Signin />} />
        <Route exact path="/dashboard/Email" element={<Email />} />
        <Route
          exact
          path="/dashboard/reset_password"
          element={<ResetPassword />}
        />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/blog" element={<Blogs />} />
        <Route exact path="/blog/articles" element={<Articals />} />
      </Routes>
    </Router>
    </Provider>
  );
}
=======
    <div>
      <Navbar />
>>>>>>> 6b39e99d405b965bd4961eba31010eb7eb23cb95

      <div className=' min-h-[calc(100vh-85px)] pt-[64px]'>
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}
