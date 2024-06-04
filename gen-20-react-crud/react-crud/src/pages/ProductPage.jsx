import React, { useEffect, useState } from 'react'
// import ProductContent from '../data/ProductContext'
import Products from '../components/Products'
import Layout from '../components/layout/Layout'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const ProductPage = () => {
  const navigate = useNavigate();
  const onClickCard = (id) => {
    navigate(`/detail/${id}`)
  }

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() =>{
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/data')
        setData(response.data)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    fetchData()
  },[])
  if (loading){return <div>Loading . . .</div>}
  if(error) {return <div>Error: {error.message}</div>}
  return (
    <Layout>
      <div className='container flex flex-wrap md:flex-row flex-col mx-auto my-[2vh]'>
        {
          data?.map ((data) =>(
            <Products
              key={data.id}
              img={data.card_images[0].image_url}
              price={data.card_prices[0].tcgplayer_price}
              name={data.name}
              series={data.series}
              onClick={() => onClickCard(data.id)}
            />
          ))
        }
      </div>
    </Layout>
  )
}
export default ProductPage
