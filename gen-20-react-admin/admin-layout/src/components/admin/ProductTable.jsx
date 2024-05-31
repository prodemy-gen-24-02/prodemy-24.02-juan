import React from 'react'
import useSWR from 'swr'
import axios from 'axios'
import { Link } from 'react-router-dom'

const fetcher = (url) => axios.get(url).then(res => res.data)

const ProductTable = () => {
    const{data, error} = useSWR('http://localhost:3000/data', fetcher)

    if (error) return <div>Failed to Load</div>
    if (!data) return <div>Loading . . .</div>
  return (
    <div className=''>
        <div>
            <h2 className='test-2xl font-bold pb-2'>Products</h2>
              <button className='bg-[#51291E] text-white py-2 px-4 rounded mb-2'>Add Product</button>
        </div>
        <table className='min-w-full bg-white'>
            <thead>
                <tr>
                      <th className='py-2'>Name</th>
                      <th className='py-2'>Type</th>
                      <th className='py-2'>Series</th>
                      <th className='py-2'>Price</th>
                </tr>
            </thead>
            <tbody>
                {data.map(product =>(
                    <tr key={product.id} className='border-t'>
                        <td className='py-2 px-4'>
                            <Link to={`/detail/${product.id}`} className='text-black hover:underline hover:text-blue-500'>
                                {product.name}
                            </Link>
                        </td>
                        <td className='py-2 px-4 text-center'>{product.type}</td>
                        <td className='py-2 px-4 text-center'>{product.card_sets[0].set_code}</td>
                        <td className='py-2 px-4 text-center'>${product.card_prices[0].tcgplayer_price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ProductTable
