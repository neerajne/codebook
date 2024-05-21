import 'react-toastify/dist/ReactToastify.css';
import {Link , NavLink} from "react-router-dom";
import Logo from "../assets/logo.png" ;
import { signInWithPopup  , signOut} from "firebase/auth";
import {  useState } from "react";
import { auth, provider } from "../firebase/config";

export const Header = () => {
  
  const [isAuth , setIsAuth] = useState(JSON.parse(localStorage.getItem("isAuth")) || false);

  function handleLogin(){
    signInWithPopup(auth , provider).then((userCredentials) => {
      console.log(userCredentials);
      setIsAuth(true) ;
      localStorage.setItem("isAuth", JSON.stringify(true));
      console.log("hello world");
      
    })
    
  }

  

  function handleLogout(){
    signOut(auth).then(() => {
      console.log("logged out sucessfully")
      setIsAuth(false);
      localStorage.setItem("isAuth" , false);
    })

  }
    return (
       <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="WriteNode Logo" />
        <span>WriteNode</span>
      </Link>
      <nav className="nav">
        <NavLink to="/" className="link" end>Home</NavLink>
        { isAuth ? (
          <>
            <NavLink to="/createPost" className="link">Create</NavLink>
            <button onClick={() => (handleLogout())} className="auth"><i className="bi bi-box-arrow-right"></i> Logout</button> 
          </>                   
        ) : (
          <button  onClick={() => (handleLogin())}   className="auth"><i className="bi bi-google"></i>   Login</button>
        ) }        
      </nav>
    </header>
    )
  }

