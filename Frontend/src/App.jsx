import { Navigate, Route, Routes } from "react-router-dom";
import './App.css'
import Courses from './Courses/Courses.jsx'
import Home from './Home/Home.jsx'
import Signup from './Components/Signup.jsx'
import ContactUs from "./Components/Contact.jsx";
import {Toaster} from "react-hot-toast";
import {useAuth} from "./context/AuthProvider.jsx" 
function App() {
 
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);


  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
    </Routes>
    <Toaster/>
    </div>
    </>
  )
}

export default App
