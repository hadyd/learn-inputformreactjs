import React from "react";

function MessagePage() {
 
  const handleClick = () => {
    document.getElementById("result").innerHTML = localStorage.getItem("user");  
  };  

  return (
    <div className="form-contact">
      <h3>Halaman Pesan</h3>
      <h5 id ="result"></h5>
      <button onClick={handleClick}>Get Message</button>
  </div>
  );

}

export default MessagePage;
