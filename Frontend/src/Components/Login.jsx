import React from 'react';
import {Link} from "react-router-dom"
import {useForm} from "react-hook-form"

import axios from "axios"
import {toast} from "react-hot-toast"
function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
   
  
  const onSubmit = async(data) => 
    {
      const userInfo={
         
        email:data.email,
        password: data.password,
      };
      await axios.post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success('Login Sucessfully');
          document.getElementById("my_modal_3").close()
          setTimeout(()=>{
            
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          },1000);
          
          
        }
          
      }).catch((err) => {
        if (err.response) {
          console.log(err);
          alert("Error: " + err.response.data.message);
          setTimeout(()=>{},2000);
        }
      }); 
    }
  
   // navigates to home
  
  return (
    <div>
      {/* You can open the  modal using document.getElementById('ID').showModal() method */}
      {/* This button is optional if you're opening the modal from Navbar */}
      {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Open modal</button> */}
      
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-800 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
             
            <h3 className="font-bold text-xl mt-2">Login!</h3>
               {/*Email */}
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br></br>
            <input
             type="email"
            placeholder='Email'
            className="w-80 px-3 py-2 border rounded-md outline-none"
            {...register("email", { required: true })}
           
            >
              </input>
              <br></br>
            {errors.email && <span  className="text-sm text-red-500">Email is required</span>}
            
           </div> 

           {/* Password */}

           <div className="mt-8 space-y-2 ">
            <span>Password</span>
            <br></br>
            <input type="password"
            placeholder='password'
            className="w-80 px-3 py-2 border rounded-md outline-none"
            {...register("password", { required: true })}
            
            >
            
            
            </input>
            <br/>
            {errors.password && <span className="text-sm text-red-500">Password is required</span>}
           </div> 
           {/* Button */}
            <div className='flex justify-around align-middle  mt-4'>
             <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Login</button>
             <p className="text-lg pl-4 pt-2 ">Not registerd? <Link to="/signup"><span className="underline text-blue-500 cursor-pointer"> Signup</span>{"  "}</Link></p>
            </div>
            </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
