import logo from '/public/logo/dark-bg.png'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {

  const {currentUser, signout} = UserAuth()

  const handleLogout = async () =>{
    try{
      await signout();
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <div className='fixed z-10 w-screen bg-primary'>
        <div className="flex justify-between max-w-4xl mx-auto navbar text-primary-content px-10">
        <a className="btn btn-ghost text-xl"><img src={logo} alt="logo" className='w-[25px]' />ChatVerse</a>
        {currentUser?<button onClick={handleLogout}>Logout</button>:''}
    </div>
    </div>
    

    
  )
}

export default Navbar