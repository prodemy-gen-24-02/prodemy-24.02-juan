import React, { useState, useEffect } from 'react'
import Layout from '../components/layout/Layout'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import axios from 'axios'

const ProductDetail = () => {
  const [data, setData] = useState([])
  const [product, setProduct] = useState(null)
  const { id } = useParams();
  const [mainImage, setMainImage] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/data')
        console.log('Api response', + response)
        console.log('API response', + response.data)
        setData(response.data)
      } catch (error) {
        console.error('Error fetching data: ', error)
      }
    }
    fetchData()
  },[])

  useEffect(() =>{
    if(data.length > 0){
      console.log('Data loaded: ', data)
      const foundProduct = data.find((item) => item.id === parseInt(id))
      if(foundProduct) {
        setProduct(foundProduct)
        setMainImage(foundProduct.card_images[0].image_url)
      }
    }
  },[data, id])

  const handleThumbnailClick = (src) => {
    setMainImage(src)
  }

  if(!product) {
    return <div>Loading . . .</div>
  }

  return (
    <Layout>
      <Breadcrumb />
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-start">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img
            id="mainimage"
            src={mainImage}
            alt={product.name}
            className="md:w-3/4 w-full rounded-lg mb-4"
          />
          <div className="flex gap-2 justify-center">
            {product.card_images?.map((image, index) => (
              <img
                key={index}
                src={image.image_url}
                alt={product.name}
                className="w-1/4 overflow-x-hidden cursor-pointer hover:ring-2 hover:ring-red-700 hover:opacity-80 transition ease-in-out duration-200"
                onClick={() => handleThumbnailClick(image.image_url)}
              />
            ))}
          </div>
        </div>
        <div className="md:w-3/4 p-4 bg-white rounded-lg shadow-lg md:my-auto">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <h2 className="text-xl font-bold mb-2">Product Details</h2>
          <p className="text-gray-600 mb-4">
            {product.desc}
          </p>
          <p><span className="font-semibold">Series:</span> {product.card_sets[0].set_code}</p>
          <div className="flex flex-col items-center justify-between">
            <span className="text-xl font-bold">${product.card_prices[0].tcgplayer_price}</span>
            <button
              className="bg-[#51291E] hover:bg-[#301014] text-white font-bold py-2 px-4 rounded transition ease-in-out duration-300 mt-4"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductDetail
