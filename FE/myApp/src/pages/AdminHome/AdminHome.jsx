import React from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";
function AdminHome() {
  return (
   <>
 <HelmetProvider>
        <Helmet>
          <title>Admin home
          </title>
        </Helmet>
      </HelmetProvider>
      <h1 style={{textAlign:"center"}}>Hello,Admin!</h1>

   </>
  )
}

export default AdminHome
