import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
const Navbar = () => {

  const [username, setusername]= useState('')
  const [password, setpassword] = useState('')
  const [log, setlog] = useState('')
  
  const navigate = useNavigate()
  function logout  (){
    localStorage.removeItem('logged in')
    navigate('/')
    window.location.reload(true)
  }
  function login(){
    var users=JSON.parse(localStorage.getItem('users'))
     var i=0;
    for(var user of users){
      if(user.username===username && user.password === password){
        i++;
        
      }
    }
    if(i===1){
      alert('login success');
      localStorage.setItem('logged in', `logged in as ${username}`)
      navigate('/dashboard')
      setlog(username)
      // window.location.reload(true)
    }else if (i>=2) {
      alert('already exists sign up again')
    }else{
      alert('invalid')
    }
  }
  return (
    <div>
     <div className="row nav">
        <div className="col-md-6">
            <h1 className='face'>Chat Craze</h1>
        </div>
        <div className="col-md-6 ">
           {
            (()=>{
if(localStorage.getItem('logged in')){
  return <div className='d-flex m-2'><button onClick={logout} className='btn btn-danger'>LOGOUT</button><p className='pl-30'>Welcome {log}</p></div>
}else{
  return(
    <div className='d-flex'>
       <input type="text" placeholder='username' value={username} onChange={(e)=>{setusername(e.target.value)}} className='form-control'/>
            <input type="password" placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}} className='form-control' />
            <button onClick={login} className='btn btn-success m-2'>LOGIN</button>
    </div>
  )
}
            })()
           }
        </div>
     </div>
    </div>
  )
}

export default Navbar
