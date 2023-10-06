import React from "react";

function Footer() {
  return (
    <footer style={{backgroundColor:"#172337", color:"white", height:100, display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <p>&copy; 2023 E-Mart. All rights reserved.</p>
      
      <div className="hstack gap-3 justify-content-center">
      <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fa fa-facebook-f"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fa fa-google"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fa fa-twitter"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fa fa-github"></i>
              </button>
              </div>
              
    </footer>
  );
}

export default Footer;