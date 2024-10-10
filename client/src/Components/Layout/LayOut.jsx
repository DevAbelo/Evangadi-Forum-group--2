import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

// Define the LayOut functional component
function LayOut({ children }) {
  return (
    <div>
      {/* Render the Header component */}
      <Header />
      {/* Render the children components passed to LayOut */}
      {children}
      {/* Render the Header component */}
      <Footer />
    </div>
  );
}

export default LayOut;
