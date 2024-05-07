import logo from './assets/logo.png'
import './Login.css'

function Login() {
  return (
    <>
      <div className='login-page'>
        <div className='container'>
          <div className='logo'>
            <img className='logo-kingo' src={logo} alt="logo" />
            <h2>ingoGrad</h2>
          </div>
          <div className='login'>
            <input type="text" id="id" name="id" placeholder="ID"></input>
            <hr />
            <input type="password" id="password" name="password" placeholder="Password"></input>
          </div>
          <button className='login-button'>LOGIN</button>
        </div>
      </div>
    </>
  )
}

export default Login