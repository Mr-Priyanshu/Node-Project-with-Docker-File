
import './App.css'

function App() {

  return (
    <>
    <div>
      <form action="register">

      <h1>
        Register
      </h1>
      <label htmlFor="Email">Register your Email</label>
      <input type="email" />
      <label htmlFor="password">Enter Your Password</label>
      <input type="password" />
      <button>Register</button>
      </form>
    </div>
    
    <hr />
    <div>
      <form action="login">

      <h1>
        Login Here  !
      </h1>
      <label htmlFor="Email">Register your Email</label>
      <input type="email" />
      <label htmlFor="password">Enter Your Password</label>
      <input type="password" />
      <button>Login</button>
      </form>
    </div>
    <hr />

    </>
  )
}

export default App
