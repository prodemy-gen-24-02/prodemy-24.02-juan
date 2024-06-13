import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { setToken, setUser } from '../store/authSlice';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const schema = yup.object().shape({
        email: yup.string().email().required("Email is required"),
        password: yup.string().min(5).max(32).required(),
    })

    const {
        register, handleSubmit, formState: {errors}, reset
    } = useForm({resolver: yupResolver(schema)})

    const handleLogin = async (data) => {
        try{
            const response = await axios.post('http://localhost:3000/login', data)
            const {accessToken, user} = response.data
            dispatch(setToken(accessToken))
            dispatch(setUser(user))
            navigate("/")
            reset()
        } catch (error){
            console.error('Error loggin in: ', error);
        }
    };
  return (
      <div className="max-w-md mx-auto mt-10 border-solid border-2 border-black p-20">
          <h2 className="text-3xl font-bold mb-6">Login</h2>
          <form onSubmit={handleSubmit(handleLogin)}>
              <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input placeholder='email'  className="w-full px-3 py-2 border rounded" {...register("email")} id="email" />
                  <p className='error'>{errors.email?.message}</p>
              </div>
              <div className="mb-4">
                  <label className="block text-gray-700">Password</label>
                  <input placeholder='password' className="w-full px-3 py-2 border rounded" {...register("password")} id='password' type='password' />
                  <p className='error'>{errors.password?.message}</p>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>
              <button className="bg-blue-500 text-white px-4 mx-4 py-2 rounded hover:bg-blue-600"><Link to="/signup">Sign up</Link></button>
          </form>
      </div>
  )
}

export default Login
