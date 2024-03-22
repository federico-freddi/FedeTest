// @ts-ignore
import { BrowserRouter, Routes, Route, } from "react-router-dom";
// @ts-ignore
import Dashboard from "./Components/Dashboard/Dashboard.jsx"
// @ts-ignore
import UserDetailsPage from "./Components/UsersTable/UserDetailsPage.jsx"
import './App.css'

function App() {

  return (
    <BrowserRouter>
         
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      {/* <Route path="/user-details/:userId" element={<UserDetailsPage/>} /> */}
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
