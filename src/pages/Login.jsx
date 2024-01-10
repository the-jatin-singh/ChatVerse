import { useEffect } from 'react'
import Footer from '../components/Footer'
import { UserAuth } from '../context/AuthContext'
import googleIcon from '/public/icons/google.svg'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();
  const { currentUser, signinWithGoogle } = UserAuth()

  const handleLogin = async() => {
    try{
      await signinWithGoogle()
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    if(currentUser){
      navigate('/chat')
    }
  },[currentUser])
  

  return (
    <div>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold">Welcome to ChatVerse! 🌐🚀</h1>
                <p className="py-6">Connect and Chat in Real-Time with ChatVerse, the Ultimate Live Chat Experience.</p>
                <button onClick={handleLogin} className="btn border-slate-500 "> Log in with Google <img className='w-[24px]' src={googleIcon} alt="" /></button>
            </div>
        </div>
         
    </div>
    <Footer />
    </div>
    
  )
}

export default Login
