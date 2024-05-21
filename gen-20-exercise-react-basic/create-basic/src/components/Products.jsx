import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const Products = (props) => {
    return (
        <div key={props.id} className='flex flex-col grow-0 shrink-0 basis-[20%] ml-[20px] mr-[20px] mb-[20px] p-[20px] text-center rounded-xl border-2 border-black shadow-lg '>
            <img src={props.img} alt={props.name} className='w-full rounded-lg mb-[10px] hover:scale-105 transition-all duration-300 ease-in-out' />
            <div>
                <h3 className='font-bold text-[1.1em] mb-[0.5em]'>{props.name}</h3>
                <p className='font-light text-[1.1em] mb-[0.5em]'>{props.series}</p>
                <p className='text-bold text-[1em] mb-[0.5em]'>$ {props.price}</p>
                <button className='flex justify-center items-center w-1/2 px-[10px] py-[10px] mx-auto border-2 border-[#c16e70] rounded hover:cursor-pointer bg-[#dc9e82] shadow-md active:opacity-75 transition-opacity duration-100'>
                    Add to Cart <FaShoppingCart />
                </button>
            </div>
        </div>
    )
}

export default Products
