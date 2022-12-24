import React from 'react'
import { useState } from 'react'
import './App.css'
const Body = () => {
    const [name, setName] = useState('')
    const [userName, setUsername]= useState('')
    const [password, setPassword] = useState('')
    function registeruser (event) {
        event.preventDefault()
        var users = JSON.parse(localStorage.getItem('users') || '[]')
        var newuser = {
            name:name,
            username:userName,
            password: password
        }
        users.push(newuser)
        localStorage.setItem('users',JSON.stringify(users))
        alert('success: login to continue')
        window.location.reload(true)
    }
  return (
    <div>
      <div className="row justify-content-center body pt">
        <div className="col-md-6">
<p>yes emmanuel made it, nonsense</p>
        </div>
        <div className="col-md-4">
            <h1>Register</h1>
            <form onSubmit={registeruser}>
                <input type="text" placeholder='name' value={name} onChange={(e)=>{setName(e.target.value)}} className='form-control' />
                <input type="text" placeholder='username' value={userName} onChange={(e)=>{setUsername(e.target.value)}} className="form-control" />
                <input type="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} className="form-control" />
                <input type="submit" value="Sign up" className="btn btn-primary" />
            </form>
        </div>
      </div>
    </div>
  )
}

export default Body
