import React from "react";
import "./AdminTable.scss";
import { useEffect } from "react";
import { useState } from "react";
function AdminTable() {
  const [admin, setAdmin] = useState([]);
  useEffect(() => {
    showTable();
  }, []);

  async function showTable() {
    const res = await fetch("http://localhost:4000/fidan");
    const data = await res.json();
    setAdmin(data);
  }
  return (
    <>
    <table>
    <tr>
                <th>Name</th>
                <th>Price</th>
                <th>image</th>
            </tr>
        {admin.map((x)=>(
            <tr>
            <td>{x.name}</td>
            <td>{x.price}</td>
            <td><img src={x.image} alt="" /></td>
           
          </tr>
           
            
        ))}
    </table>
    </>
  )
}

export default AdminTable;
