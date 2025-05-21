import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/contact`, formData);
      alert("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Error submitting message.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="form-control my-2" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input className="form-control my-2" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <textarea className="form-control my-2" name="message" placeholder="Your message" rows={4} value={formData.message} onChange={handleChange} required />
      <button className="btn btn-primary" type="submit">Send</button>
    </form>
  );
}
