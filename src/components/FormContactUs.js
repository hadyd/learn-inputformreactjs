import React, { useState } from "react";
import { withRouter } from "react-router-dom";
function FormContactUs(props) {
  console.log("props", props);
  // Menggunakan Nestad:
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = () => {
    localStorage.setItem("user", JSON.stringify(user));
    props.history.push("/message");
  };

  return (
    <div className="form-contact">
      <h3>Input Pesan</h3>
      <input
        className="input"
        type="name"
        name="name"
        placeholder="Your name.."
        value={user.name}
        onChange={handleChange}
      />
      <input
        className="input"
        type="email"
        name="email"
        placeholder="Your email.."
        value={user.email}
        onChange={handleChange}
      />
      <input
        className="input"
        type="message"
        name="message"
        placeholder="Write message.."
        value={user.message}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Send</button>
    </div>
  );

  // Kalo Satu-Satu :

  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [message, setMessage] = useState("");

  //   const handleChangeName = (event) => {
  //     setName(event.target.value);
  //   };

  //   const handleChangeEmail = (event) => {
  //     setEmail(event.target.value);
  //   };

  //   const handleChangeMessage = (event) => {
  //     setMessage(event.target.value);
  //   };

  //   const handleClick = () => {
  //     const userContact = {
  //       name: name,
  //       email: email,
  //       message: message,
  //     };
  //     localStorage.setItem("user", JSON.stringify(userContact));
  //   };

  //   return (
  //     <div>
  //       <input type="name" value={name} onChange={handleChangeName} />
  //       <input type="email" value={email} onChange={handleChangeEmail} />
  //       <input type="message" value={message} onChange={handleChangeMessage} />
  //       <button onClick={handleClick}>Kirim</button>
  //     </div>
  //   );
}

export default withRouter(FormContactUs);
