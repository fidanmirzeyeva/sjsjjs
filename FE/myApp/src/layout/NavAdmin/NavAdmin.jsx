import React from 'react'
import { Link } from 'react-router-dom'
import './NavAdmin.scss'
function NavAdmin() {
  return (
   <>
    <div className="navAdmin">
        <div className="navAdmin_text">
        <i className="fa-solid fa-house"></i>
        <p>Admin Page</p>
        </div>
        <div className="navAdmin_list">
            <ul>
                <Link to={"/admin"}>Admin Home</Link>
                <Link to={"/admin/table"}>Admin Table</Link>
                <Link to={"/admin/add"}>Add</Link>
                
                
            </ul>
        </div>
    </div>
   </>
  )
}

export default NavAdmin
