import React from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({children}) {

  return (
    <div className="bg-pattern bg-fixed bg-center bg-cover">

      <Navbar />
  
      <main>
        {children}
      </main>

      <Footer />

    </div>
  )
}

// to add background throw this in div tag: className="bg-pattern bg-fixed bg-center bg-cover"