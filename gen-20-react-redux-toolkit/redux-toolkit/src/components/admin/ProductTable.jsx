import React from 'react'
import useSWR from 'swr'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const fetcher = (url) => axios.get(url).then(res => res.data)

const ProductTable = () => {
    const navigate = useNavigate()
    const onClickCard = () => {
        navigate(`/admin/addproduct`)
    }
    const{data, error, mutate} = useSWR('http://localhost:3000/data', fetcher)

    if (error) return <div>Failed to Load</div>
    if (!data) return <div>Loading . . .</div>

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/data/${id}`)
            mutate()
        } catch (error) {
            console.error('Failed to delete product', error)
        }
    }

  return (
    <div className='p-4'>
        <div>
            <h2 className='test-2xl font-bold pb-2'>Products</h2>
              <button className='bg-[#51291E] text-white py-2 px-4 rounded mb-2' onClick={onClickCard}>Add Product</button>
        </div>
        <table className='min-w-full bg-white'>
            <thead>
                <tr>
                      <th className='py-2 border-b border-gray-200'>Name</th>
                      <th className='py-2 border-b border-gray-200'>Type</th>
                      <th className='py-2 border-b border-gray-200'>Series</th>
                      <th className='py-2 border-b border-gray-200'>Price</th>
                      <th className='py-2 border-b border-gray-200'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map(product =>(
                    <tr key={product.id} className='border-t'>
                        <td className='py-2 px-4 border-b border-gray-200'>
                            <Link to={`/detail/${product.id}`} className='text-black hover:underline hover:text-blue-500'>
                                {product.name}
                            </Link>
                        </td>
                        <td className='py-2 px-4 text-center border-b border-gray-200'>{product.type}</td>
                        <td className='py-2 px-4 text-center border-b border-gray-200'>{product.card_sets?.[0]?.set_code}</td>
                        <td className='py-2 px-4 text-center border-b border-gray-200'>${product.card_prices?.[0]?.tcgplayer_price}</td>
                        <td className='py-2 px-4 text-center border-b border-gray-200'>
                            <Link to={`/admin/editproduct/${product.id}`} className='mr-2 text-blue-500'>Edit</Link>
                            <button onClick={() => handleDelete(product.id)} className='text-red-500'>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ProductTable
