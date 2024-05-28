import React from 'react'
import ProductContent from '../data/ProductContext'
import Products from '../components/Products'
import Layout from '../components/layout/Layout'
import { useNavigate } from 'react-router-dom'

const ProductPage = () => {
  const navigate = useNavigate();
  const onClickCard = (id) => {
    navigate(`/detail/${id}`)
  }
  return (
    <Layout>
      <div className='container flex flex-wrap md:flex-row flex-col mx-auto my-[2vh]'>
        {
          ProductContent?.map ((data) =>(
            <Products
              key={data.id}
              img={data.img}
              price={data.price}
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
