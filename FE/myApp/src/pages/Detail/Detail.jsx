import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";

function Detail() {
    let {id}=useParams()
    const [detail, setDetail] = useState([])

    useEffect(() => {
     
    
      showDetail()
     
    }, [])
    
  async  function showDetail() {
        const res = await fetch(`http://localhost:4000/fidan/${id}`)
        const data = await res.json()
        setDetail(data)
    }
  return (
    <>
     <HelmetProvider>
        <Helmet>
          <title>Detail
          </title>
        </Helmet>
      </HelmetProvider>

    <img src={detail.image} alt="" style={{width:"200px"}} />
    <div>{detail.name}</div>
    <div></div>
    </>
  )
}

export default Detail
