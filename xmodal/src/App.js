import logo from './logo.svg';
import './App.css';
import  { useState, useEffect } from 'react';

function App() {
  const [isVisible,setIsVisible] = useState(false);
  const [formData, setFormData] = useState({username:"",email:"",phone:"",dob:""})

  const openForm = () => {
    setIsVisible(true);
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phonePattern = /^\d{10}$/;
    if (!emailPattern.test(formData.email)) {
      alert("Invalid email. Please check your email address.");
      return;
    }
    if (!phonePattern.test(formData.phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }
    alert("Form submitted successfully!");
    setIsVisible(false); 
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal')) {
      setIsVisible(false);
    }
  };

  return (
    <div className="App">
      {/* {!isVisible && ( */}
        <div>
          <h1>User Details Modal</h1>
          <button onClick={openForm}>Open Form</button>
        </div>
      {/* )} */}
      {isVisible && (
        <div className="modal" onClick={handleModalClick}>
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <h2>Fill Details</h2>
            <label htmlFor="username">Username:</label><br/>
            <input type="text" id="username" value={formData.username} onChange={handleChange} required /><br/>
            <label htmlFor="email">Email Address:</label><br/>
            <input type="email" id="email" value={formData.email} onChange={handleChange} required /><br/>
            <label htmlFor="phone">Phone Number:</label><br/>
            <input type="text" id="phone" value={formData.phone} onChange={handleChange} required /><br/>
            <label htmlFor="dob">Date of Birth:</label><br/>
            <input type="date" id="dob" value={formData.dob} onChange={handleChange} required /><br/>
            <button type="submit" className='submit-button'>Submit</button>
          </form>
        </div>
      </div>
      )}

      
      
    </div>
  );
}

export default App;
