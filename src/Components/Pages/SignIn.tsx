import React, {useState} from 'react'
 import pic from "../../assets/Cleaning tools.jpg"
import { useNavigate } from 'react-router-dom';
import {loginUser} from  "../Utils/ApiCalls"

const SignIn :React.FC= () => {
  const Navigate = useNavigate() 
  const [formData, setFormData] = useState ({
    Email: "",
    Password: "",
  });

  const onChangeForm = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:value,
    }))
  }


  const  LoggingUser = async () => {
    try
    {
      const res = await loginUser (formData)
      Navigate("/landing")
      console.log("this is a form", res)
    }catch(err)
    {
      return err
    }
  }


  return (
    <div>
      {/* <div className='w-[100%] min-h-[70vh]  bg-cover bg-center bg-no-repeat py-20 sm:mx-auto sm:w -[100%] ' style={{backgroundImage: `url(${pic})`}}> */}
        <div className='flex items-center justify-center sm:mx-auto sm:flex-wrap sm:flex-col sm:items-center'>
        <div className='bg-[#1239ac] flex flex-col items-center pt-[70px] h-[600px] w-[400px] rounded-[20px] sm:w-[250px] sm:h-[400px]'>
                    <div>
                        <img
                        className='h-[300px] w-[300px] rounded-[10px] object-cover overflow-hidden sm:h-[150px] sm:w-[150px]'
                        src={pic} alt="" />
                    </div>
                    <br />
                    <div className='pt-[90px] sm:pt-6'>
                        <p className='text-[white] sm:text-[10px]'>Welcome to unicorn Kleen <br /> a place where all your worries about <br /> are meet...</p>
                        <p className='text-[white] sm:text-[10px]'>you are just a step away...</p>
                    </div>
                </div>
          {/* <div className='bg-[#1239ac] h-[600px] w-[400px] rounded-[20px] sm:w-[280px] sm:h-[400px]'>
            <img 
            className=''
            src="" alt="" />
          </div> */}
          <div className='h-[600px] w-[400px]  rounded-[20px] pt-[70px] sm:mx-auto sm:flex-wrap sm:flex-col sm:items-center md:mx-auto md:flex-wrap md:flex md:flex-col'>
            <form 
            onSubmit={(e) => {
              e.preventDefault();
              LoggingUser();
            }}
            >
              <h1 className='text-[#1239ac] text-[50px] font-bold text-center sm:text-[18px]'>SIGN IN</h1>
              <div className='pt-[30px] flex flex-col items-center'>
                <input
                required
                 onChange={onChangeForm}
                 name='Email'
                className='h-[50px] w-[350px] border-solid-[1px white] p-3 outline rounded-[10px] sm:w-[250px] sm:p-2'
                placeholder='Email'
                />
              </div>
              <br />
              <br />
              <div className='flex flex-col items-center'>
                <input
                onChange={onChangeForm}
                name='Role'
                className='h-[50px] w-[350px] border-solid-[1px white] outline  p-3 rounded-[10px] sm:w-[250px] sm:p-2'
                placeholder='Role'
                />
                                
              </div>
              <br />
              <div className='p-5'>
                            <input
                            required
                            onChange={onChangeForm}
                            name='Password'
                            className='h-[50px] w-[350px] outline rounded-[10px] p-3 sm:w-[200px] sm:p-2 sm:h-[40px]'
                            placeholder='Password'
                            />

<h3 className='text-end text-[#1239ac] pt-2 sm:flex-col sm:items-center sm:text-center'>Forgot Password</h3> 
                        </div> 
                        <br />             
              <div className='flex items-center justify-center'>
                <button className='h-[50px] w-[350px] bg-[#1239ac] text-[white] rounded-[10px] sm:w-[180px]'>Login</button>
              </div>
            </form>
            <div className='flex gap-16 pt-[20px] sm:flex-col sm:items-center sm:gap-5'>
              <h3>Do not have an account?</h3>
              <h3 className='text-[#1239ac]'>Sign Up</h3>
            
            </div>
          </div>
        </div>
      {/* </div> */}
      
    </div>
  )
}

export default SignIn
