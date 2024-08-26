import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://dummyjson.com/auth/login', { 
        username, 
        password 
      });
      
      localStorage.setItem('token', response.data.token);
      navigate('/admin');
    } catch (error) {
      setError('Invalid Admin data');
    }
  };

  return (
    <>
    <div className=' form-control bg-success bg-gradient py-12 justify-center'>
      <h1 className='text-center m-4 text-white'>Admin Login</h1>
      <div className='d-flex justify-content-center mb-3'>

      <form onSubmit={handleLogin}>
  <div className="p-2"> 
    <input
      type="text"
      className="form-control"
      placeholder="Username"
      value={username} 
      onChange={(e) => setUsername(e.target.value)}
    />
  </div>
  <div className='p-2'>
    <input
      type="password"
      className="form-control"
      placeholder="password"
      value={password} 
      onChange={(e) => setPassword(e.target.value)}
    />
</div>
<button className='btn btn-success ' type="submit">Login</button>

      </form>
      {error && <p>{error}</p>}
      </div>
      
    </div></>
  );
};

export default LoginPage;








{/* <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
<button type="submit">Login</button> */}



















































// import React from 'react'

// import { useState } from 'react'
// import Auth from './assets/components/Auth'
// function App() {
//   const [username, setusername] = useState("");
//   const [password, setPassword] = useState("");

//   const authen = async(username, password)=>{
//     await fetch('https://dummyjson.com/user/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
  
//         username: username,
//         password: password,
//         expiresInMins: 60,
//       })
//     })
//       .then(res => res.json())
//       .then((json) => console.log(json));
  
//   }


//   return (
//     <>
//       <div className='container'>
//         <h2>form</h2>

//         <form onSubmit={(e)=>{
//           e.preventDefault(),
//           authen(username, password)
//         }} action=''>

//         <div className='m-4 grid gap-3'>
//           <input placeholder='userName' type='text ' onChange={(e)=>setusername(e.target.value)}  value={username}/>
//           <input placeholder='password' type='password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
//           <div >
//             <button className='btn btn-primary ' type='submit'>submit</button>
//           </div>
//         </div>
//         </form>
//         <Auth />



//       </div>

//     </>
//   )
// }

// export default App
