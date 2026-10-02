//Import react
import React from 'react'
//Import images
import logo from './assets/Abstraction.png'
import weblogo from './assets/pngegg.png'
import google from './assets/google.png'
import facebook from './assets/facebook.png'
//CSS Import/Link
import App from './App.css'
//Declaring the app function 
const App = () => {
  //HTML to be returned
  return (
    <div className='page'>
      <div className='left'>
        <img src={weblogo} alt='logo' width='125px' height='117px'></img>
        <h3>Getting Started with VR Creation</h3>
        <img src={logo} alt='logo' width='630.49px' height='673.97px'></img>
      </div>
      <div className='right'>
        <select name="language" id="lang">
          <option value="En">English (UK)</option>
          </select>
          <form>
            <h2>Create account</h2>
            <div className='buttonRow'>
              <button><img src={google}>Signup with Google</img></button>
              <button><img src={facebook}>Signup with Facebook</img></button>
              
            </div>
            <p className='or'>- OR -</p>
            <div className='inputs'>
              <input placeholder='Full Name' type='text' required> </input>
              <input placeholder='Email' type='email' required>  </input>
              <div className='passwordBox'>
                <input placeholder='Password' type='password' required> </input>
                <img src={lock}></img>
              </div>

            </div>

            <button classname='Create'>Create Account</button>
            <p>Already have an account?</p>
          </form>
      </div>
    </div>
  )
}

export default App

