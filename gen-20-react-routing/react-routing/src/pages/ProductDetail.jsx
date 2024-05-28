import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import { FaAngleRight } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import ProductContent from '../data/ProductContext'
import Breadcrumb from '../components/Breadcrumb'

const ProductDetail = () => {
  const { id } = useParams();
  const product = ProductContent.find((item) => item.id === parseInt(id))
  const [mainImage, setMainImage] = useState(product.img)

  const handleThumbnailClick = (src) => {
    setMainImage(src)
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
            {product.thumbnail.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={product.name}
                className="w-1/4 overflow-x-hidden cursor-pointer hover:ring-2 hover:ring-red-700 hover:opacity-80 transition ease-in-out duration-200"
                onClick={() => handleThumbnailClick(src)}
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
          <p><span className="font-semibold">Series:</span> {product.series}</p>
          <div className="flex flex-col items-center justify-between">
            <span className="text-xl font-bold">${product.price}</span>
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
