import React from 'react';
import { AiFillEyeInvisible,AiFillEye} from "react-icons/ai";
import { useState} from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [formData,setFormData]=useState({
      firstName:"",
      lastName:"" ,
      email:"",
      password:"",
      confirmPassword:"" 
    })

    const [showPassword,setShowPassword]=useState(false);
    const [showConfirmPassword,setShowConfirmPassword]=useState(false);
    const [accountType,setAccountType]= useState("student");

    function changeHandler(event){
        setFormData((prevData) => (
            {
              ...prevData,
            [event.target.name] :event.target.value
            }  
        ));

    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Password do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData={...formData};

        const finalData={
            ...accountData,
            accountType
        }

        console.log("Printing AccountData ");
        console.log(finalData);
        navigate("/dashboard");


    }
        return (
            <div className='h-full w-full'>
                <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
                    <button
                    className={`${accountType==="student"
                    ? "bg-richblack-900 text-richblack-5"
                    : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("student")}
                    >
                        Student
                    </button>
                    <button
                    className={`${accountType==="instructor"
                    ? "bg-richblack-900 text-richblack-5"
                    : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                     onClick={() => setAccountType("instructor")}
                    >
                        Instructor
                    </button>
                </div>
            <form onSubmit={submitHandler}>
                 <div className='flex justify-between'>
                     <label>
                         <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] mt-4'>
                             First Name <sup className='text-pink-200'>*</sup>
                         </p>
                         <input
                             required
                             type="text"
                             name="firstname"
                             onChange={changeHandler}
                             placeholder="Enter First Name"
                             vlaue={formData.firstName}
                             className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                         />
                     </label> 
                     <label>
                            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] mt-4'>
                                Last Name <sup className='text-pink-200'>*</sup>
                            </p>
                            <input
                                required
                                type="text"
                                name="lastname"
                                onChange={changeHandler}
                                placeholder="Enter Last Name"
                                vlaue={formData.lastName}
                                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                            />
                       </label>
                   </div>
                   <label className='w-full'>
                            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] mt-4'>
                                Email Address <sup className='text-pink-200'>*</sup>
                            </p>
                            <input
                                required
                                type="email"
                                name="email"
                                onChange={changeHandler}
                                placeholder="Enter Email"
                                vlaue={formData.email}
                                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                            />
                   </label>

                   <div className='flex justify-between w-full'>
                       <label className='relative'>
                           <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] mt-4'>
                                Create Password <sup className='text-pink-200'>*</sup>
                            </p>
                            <input
                                required
                                type={showPassword ? ("text"):("password")}
                                name="password"
                                onChange={changeHandler}
                                placeholder="password "
                                vlaue={formData.password}
                                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                            />
                            <span className='absolute right-3 top-[55px] cursor-pointer'
                            onClick={()=>setShowPassword((prev)=>!prev)}> 
                                 {showPassword?

                                 (<AiFillEyeInvisible fontSize={24} fill='#AFB2BF'/>):

                                 (<AiFillEye fontSize={24} fill='#AFB2BF'/>)}
                           </span>
                       </label>


                       <label className='relative'>
                           <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] mt-4'>
                                Confirm Password <sup className='text-pink-200'>*</sup>
                            </p>
                            <input
                                required
                                type={showConfirmPassword ? ("text"):("password")}
                                name="confirmPassword"
                                onChange={changeHandler}
                                placeholder="Confirm Password "
                                value={formData.confirmPassword}
                                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                            />
                           <span className='absolute right-3 top-[55px] cursor-pointer' 
                           onClick={()=>setShowConfirmPassword((prev)=>!prev)}> 
                                 {showConfirmPassword?

                                 (<AiFillEyeInvisible fontSize={24} fill='#AFB2BF'/>):

                                 (<AiFillEye fontSize={24} fill='#AFB2BF'/>)}
                           </span>
                       </label>
                   </div>
                   <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 w-full px-[12px] py-[8px] mt-6'>
                      Create Account
                   </button>
            </form>
          
            </div>
        );
    }


export default SignupForm;