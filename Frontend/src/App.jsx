
import Signup from "./components/Signup"
import { useAuth } from "./context/AuthProvider";
import Courses from "./Courses/Courses"
import Home from "./home/Home"
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes } from "react-router-dom"


function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/courses" element={authUser? <Courses/> : <Navigate to="/signup" />} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    <Toaster />
    </div>
    </>
  )
}

export default App