import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'
import {useNavigate} from 'react-router-dom'

const Payment = () => {
    const navigate = useNavigate()
    const itemCarts = useSelector((state) => state.cart.itemCarts)

    const schema = yup.object().shape({
        name: yup.string("Field Name is required"),
        email: yup.string().email().required("Email is required")
    })

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm({resolver: yupResolver(schema)})


  return (
    <div>
        
    </div>
  )
}

export default Payment
