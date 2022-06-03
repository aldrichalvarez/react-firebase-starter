import React from "react"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Signup from "./Signup"
import Login from "./Login"
// import UpdateProfile from "./UpdateProfile"
import PrivateRoute from "./PrivateRoute"
import { Provider } from 'react-redux';
import { store } from "../configure-store"


function App() {
  return (
    <Provider store={store}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path='/' element={<PrivateRoute />}>
            <Route exact path='/' element={<Home />} />
            {/* <Route exact path="/update-profile" element={<UpdateProfile />} /> */}
            </Route>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
          </Routes>
        </AuthProvider>
      </Router>
    </Provider>
  )
}

export default App
