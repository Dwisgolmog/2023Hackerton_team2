import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

function Chatting(){
    const [message, setMessage] = useState("");
    const [submit,setSubmit] = useState(0);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setMessage(event.target.message.value);
    };

    const handlSetSubmit = ()=>{
        setSubmit(submit+1);
    }
  
    useEffect(() => {
        axios.get('/recommend')
        .then(result => {
            console.log(result);
        }).catch(e => {
            console.log('axios 에러발생!!:' + e);
        })
    }, [submit]);

    return (
      <form onSubmit={handleSubmit} className="message-form">
        <input
          type="text"
          name="message" 
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="message-input"
        />
        <button type="submit" className="send-button" onClick={handlSetSubmit}>
          Send
        </button>
      </form>
    );
};  

export default Chatting