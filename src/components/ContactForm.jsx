import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message envoyé avec succès !');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Votre nom" value={formData.name} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Votre email" value={formData.email} onChange={handleChange} required />
      <textarea name="message" placeholder="Votre message" value={formData.message} onChange={handleChange} required />
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default ContactForm;
