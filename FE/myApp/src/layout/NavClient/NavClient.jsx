import React from 'react'
import { Link } from 'react-router-dom'
import "./NavClient.scss"
function NavClient() {
  return (
    <>
    <div className="navClient">
        <div className="navClient_text">
        <i className="fa-solid fa-house"></i>
        <p>Home Page</p>
        </div>
        <div className="navClient_list">
            <ul>
                <Link to={"/"}>Home</Link>
                <Link to={"products"}>Products</Link>
                
            </ul>
        </div>
    </div>
    </>
  )
}

export default NavClient
