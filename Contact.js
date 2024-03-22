import React, { useState } from 'react';
import './Contact.css';
import { Link, useNavigate } from 'react-router-dom';

function Contact({ setContact }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleClose = () => {
    navigate('/');
    setContact(false);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      window.alert('All fields are required');
      return;
    }
    if (!validateEmail(formData.email)) {
      window.alert('Please enter a valid email address');
      return;
    }
  }
  return (
    <div className="postcard contact">
      <button onClick={handleClose}>Close</button>
      <div className="message absolute" style={{ maxWidth: '70%' }}>
        <h1 style={{ marginTop: '-40px' }}>Contact</h1>
        <form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="3d5f6283-539d-4dc5-a45f-4bbd05eb1206"/>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" name="name" placeholder="Name" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" name="message" rows="3" onChange={handleChange}></textarea>
          </div>
          <div class="h-captcha" data-captcha="true"></div>
          <button type="submit" onClick={handleSubmit}>Submit Form</button>
        </form>
        {/* <div className="form-group m-3">
          <button type="button" className="btn btn-light" onClick={handleSubmit}>Submit</button>
        </div> */}
        <div className="rounded-social-buttons">
          <Link className="social-button twitter" to="https://www.twitter.com/riiiwtff" target="_blank"><i className="fab fa-twitter"></i></Link>
          <Link className="social-button linkedin" to="https://www.linkedin.com/in/riyasachdeva04" target="_blank"><i className="fab fa-linkedin"></i></Link>
          <Link className="social-button github" to="https://www.github.com/riyasachdeva04" target="_blank"><i className="fab fa-github"></i></Link>
        </div>
      </div>
      <script src="https://web3forms.com/client/script.js" async defer></script>
    </div>
  );
}

export default Contact;
