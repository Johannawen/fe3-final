import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.length > 5 && /\S+@\S+\.\S+/.test(email)) {
      setMessage(`Gracias ${name}, te contactaremos cuando antes vía mail`)
    } else {
      setMessage('Por favor verifique su información nuevamente')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={name} 
          onChange={e => setName(e.target.value)} 
          placeholder="Full Name" 
          required 
        />
        <input 
          type="email" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          placeholder="Email" 
          required 
        />
        <button type="submit">Send</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Form;
