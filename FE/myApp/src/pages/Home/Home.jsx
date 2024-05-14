import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home
          </title>
        </Helmet>
      </HelmetProvider>
      <h1
        style={{
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Welcome Home Page!
      </h1>
    </>
  );
}

export default Home;
