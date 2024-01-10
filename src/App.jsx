import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Chat from "./pages/Chat"
import { Navigate, Route, Routes } from "react-router-dom"
import { PrivateRoute } from "./routes/PrivateRoute"
import { AuthProvider } from "./context/AuthContext"


function App() {

  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<PrivateRoute><Chat /></PrivateRoute>} />
        <Route path="*" element={<Navigate to='/' />} />

      </Routes>
    </AuthProvider>
 
  )
}

export default App
