import React, { useState, useEffect } from 'react';
import Layout from '../layout/Layout';
import './Contact.css';
import contactImg from '../../assets/contactImg.jpg'


const Contact = () => {
  const [inputs, setInputs] = useState({});


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs)
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  return (
    <Layout>
   
        <div className="contactContainer">
          <img className='contactImg' src={contactImg} />
          <div className="contact">
            <h1 className='contactH1'>GIVE ME A SHOUT</h1>
            <p>Phone: 123456</p>
          <p>Email: </p>
          <p>Social media:</p>
          </div>
        </div>
      

      <div className='section'></div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input value={inputs.email || ''} onChange={handleChange} name="email" type="text" />
          </div>
          <div>
            <label htmlFor="password">Phone</label>
            <input value={inputs.phone || ''} onChange={handleChange} name="phone" type="text" />
          </div>
          <div>
            <label htmlFor="message">Leave a Message</label>
            <textarea type='text' name='message' value={inputs.textarea} onChange={handleChange} ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className='section'></div>

    </Layout>
  );
};

export default Contact;