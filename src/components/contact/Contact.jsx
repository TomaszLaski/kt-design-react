import React from 'react';
import Layout from '../layout/Layout';
import './Contact.css'

const Contact = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Layout>
    	<div className="contactContainer">
				<div className="contact">
					<h1>Contact</h1>
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
            <input id="email" type="text" />
          </div>
          <div>
            <label htmlFor="password">Phone</label>
            <input id="phone" type="text" />
          </div>
          <div>
            <label htmlFor="message">Leave a Message</label>
            <textarea ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className='section'></div>

    </Layout>
  );
};

export default Contact;