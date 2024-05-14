import React from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
function Products() {
  const [products, setProducts] = useState([])
useEffect(() => {
  
getProducts()
  
}, [])


  async function getProducts() {
    const res = await fetch("http://localhost:4000/fidan")
    const data = await res.json()
    setProducts(data)
    
  }
  

  return (
   <>
    <HelmetProvider>
        <Helmet>
          <title>Products
          </title>
        </Helmet>
      </HelmetProvider>

      <div style={{display:"flex",flexWrap:"wrap",padding:"80px",gap:"20px"}}>
      {products.map((x)=>(

<div key={x.id} style={{width:"250px",border:"1px solid black",}}>
    <img src={x.image} alt="" style={{width:"200px",height:"300px"}}/>
    <p>{x.name}</p>
    <p>{x.price}</p>
    <button>Add Basket</button>
    <button ><Link to={`/detail/${x._id}`}>Detail</Link></button>
</div>

))}
      </div>
      
   </>
  )
}

export default Products
