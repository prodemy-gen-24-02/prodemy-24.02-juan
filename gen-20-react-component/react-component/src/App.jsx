import { useState } from 'react'
import Products from './components/Products'
import ProductContent from './contexts/ProductContext'

function App() {
  return (
    <>
      <div className='App container flex flex-wrap md:flex-row flex-col mx-auto my-[2vh]'>
        {
          ProductContent.map(contents =>(
            <Products
              key={contents.id}
              img={contents.img}
              price={contents.price}
              name={contents.name}
              series={contents.series}
            />
          ))
        }
      </div>
    </>
  )
}

export default App
