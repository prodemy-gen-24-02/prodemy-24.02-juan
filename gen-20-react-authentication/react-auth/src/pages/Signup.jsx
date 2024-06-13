import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { setToken, setUser } from '../store/authSlice'

const Signup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const schema = yup.object.shape({
        email: yup.string().email().required("Email is required"),
        password: yup.string().min(5).max(32).required(),
        name: yup.string().required("must input name")
    })

    const {register, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(schema)})

    const handleSignup = async () =>{
        try{
            const response = await axios.post('http://localhost:3000/register', {
                email,
                password,
                name,
                role: "user"
            })
            console.log('Sign-up success: ', response.data)
            navigate("/")
        } catch (error) {
            console.error('Error signing up: ', error)
        }
    }
  return (
      <div className="max-w-md mx-auto mt-10 border-solid rounded-lg border-2 border-black p-2">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit(handleSignup)}>
            <div className='mb-4'>
                <label className='block text-gray-700'>Email</label>
                <input placeholder='email' className='w-full px-3 py-2 border rounded' {...register("email")} id='email' />
                <p className='error'>{errors.email?.message}</p>
            </div>
              <div className='mb-4'>
                  <label className='block text-gray-700'>Password</label>
                  <input placeholder='password' className='w-full px-3 py-2 border rounded' {...register("password")} id='password' type='password' />
                  <p className='error'>{errors.password?.message}</p>
              </div>
              <div className='mb-4'>
                  <label className='block text-gray-700'>Name</label>
                  <input placeholder='name' className='w-full px-3 py-2 border rounded' {...register("name")} id='name' />
                  <p className='error'>{errors.name?.message}</p>
              </div>
              <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Login</button>
          </form>
      </div>
  )
}

export default Signup
