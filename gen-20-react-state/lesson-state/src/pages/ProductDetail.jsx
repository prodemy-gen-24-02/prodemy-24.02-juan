import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import { FaAngleRight } from 'react-icons/fa'

const ProductDetail = () => {
  const [mainImage, setMainImage] = useState('https://ms.yugipedia.com//2/2c/TenpaiDragonPaidra-LEDE-EN-SR-1E.png')
  const thumbnails = [
    "https://ms.yugipedia.com//2/2c/TenpaiDragonPaidra-LEDE-EN-SR-1E.png",
    "https://ms.yugipedia.com//0/0d/TenpaiDragonPaidra-LEDE-JP-QCScR.png",
    "https://ms.yugipedia.com//5/5d/TenpaiDragonPaidra-LEDE-JP-ScR.png",
    "https://ms.yugipedia.com//7/7a/TenpaiDragonPaidra-LEDE-JP-SR.png",
    "https://ms.yugipedia.com//0/0d/TenpaiDragonPaidra-LEDE-JP-QCScR.png"
  ]

  const handleThumbnailClick = (src) => {
    setMainImage(src)
  }

  return (
    <Layout>
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-start mt-16">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img
            id="mainimage"
            src={mainImage}
            alt="Main product"
            className="md:w-3/4 w-full rounded-lg mb-4"
          />
          <div className="flex gap-2">
            {thumbnails.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Thumbnail ${index + 1}`}
                className="w-1/4 overflow-x-hidden cursor-pointer hover:ring-2 hover:ring-red-700 hover:opacity-80 transition ease-in-out duration-200"
                onClick={() => handleThumbnailClick(src)}
              />
            ))}
          </div>
        </div>
        <div className="md:w-3/4 p-4 bg-white rounded-lg shadow-lg md:my-auto">
          <h1 className="text-2xl font-bold mb-2">Tenpai Dragon Paidra - Legacy of Destruction</h1>
          <h2 className="text-xl font-bold mb-2">Product Details</h2>
          <p className="text-gray-600 mb-4">
            If this card is Normal or Special Summoned: You can add to your hand or Set 1 "Sangen" Spell/Trap from your Deck.
            You can only use this effect of "Tenpai Dragon Paidra" once per turn. You take no battle damage from battles
            involving your FIRE Dragon monsters. Once per turn, during the Battle Phase, you can (Quick Effect): Immediately
            after this effect resolves, Synchro Summon using this card you control.
          </p>
          <p><span className="font-semibold">Number:</span> LEDE-EN016</p>
          <p><span className="font-semibold">Rarity:</span> Super Rare</p>
          <p><span className="font-semibold">Attribute Monster Type/Card Type:</span> Fire Dragon/Effect Monster</p>
          <p><span className="font-semibold">Level:</span> 3</p>
          <p><span className="font-semibold">A / D:</span> 1700 / 1000</p>
          <div className="flex flex-col items-center justify-between">
            <span className="text-xl font-bold">$18.49</span>
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
