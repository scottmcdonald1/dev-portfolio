import React from "react";
import Footer from "./Footer";

export default function Layout({children}) {

  return (
    <div>
  
      <main>
        {children}
      </main>

      <Footer/>

    </div>
  )
}