 import React from "react"
 import {Link,useLocation, useNavigate } from 'react-router-dom'
 import Login from "./Login"
 import axios from "axios"
 import {useForm} from "react-hook-form"
 import {toast} from "react-hot-toast"

 function Signup()
 {
  
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
     const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
       
      
      const onSubmit = async (data) => 
      {
        const userInfo={
          fullname:data.fullname,
          email:data.email,
          password: data.password,
        };
        await axios.post("http://localhost:4001/user/signup", userInfo)
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            toast.success('Account created!');
            navigate(from, { replace: true });
          }
            console.log("User Response:", res.data);
            localStorage.setItem("users", JSON.stringify(res.data.user));
        }).catch((err) => {
          if (err.response) {
            console.log(err);
            
            toast.error('Error: " + err.response.data.message');
          }
        }); 
      }
    return (<div className="flex h-screen items-center justify-center"> 
      
      <div  className=" w-[500px] border-[2px] shadow-md p-5 rounded-md">
        <div className=" dark:bg-slate-800 dark:text-white">
          <form method="div" onSubmit={handleSubmit(onSubmit)}>
            <Link to="/">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </Link>
          
          {/*SignUp */}
          <h3 className="font-bold text-lg mt-2">SignUp</h3>
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br></br>
            <input type="text"
            placeholder='Enter your Name'
            className="w-80 px-3 py-2 border rounded-md outline-none dark:text-black"
            {...register("fullname", { required: true })}
            >
            </input>
            <br/>
            {errors.fullname && <span  className="text-sm text-red-500">Name is required</span>}
           </div> 




               {/*Email */}
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br></br>
            <input type="email"
            placeholder='Email'
            className="w-80 px-3 py-2 border rounded-md outline-none  dark:text-black"
            {...register("email", { required: true })}
            >
            </input>
            <br/>
            {errors.email && <span  className="text-sm text-red-500">Email is required</span>}
           </div> 

           {/* Password */}

           <div className="mt-8 space-y-2 ">
            <span>Password</span>
            <br></br>
            <input type="password"
            placeholder='Password'
            className="w-80 px-3 py-2 border rounded-md outline-none  dark:text-black"
            {...register("password", { required: true })}
            >
            </input>
            <br/>
            {errors.password && <span  className="text-sm text-red-500">Password is required</span>}
           </div> 



           {/* Button */}
            <div className='flex justify-around align-middle  mt-4'>
             <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">SignUp</button>
             <div className="text-lg pl-4 pt-2 ">Have a account? 
               
               <span className="underline text-blue-500 cursor-pointer"
               onClick={() => {
                  const modal = document.getElementById("my_modal_3");
                  if (modal) modal.showModal();
                }}
               >

                   Login
               </span>{"  "}
               <Login/>
               </div>
            </div>
            </form>
        </div>
      </div>
    </div>) ;
 }
 export default Signup;