import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dapatkan data dari state
    const { name, email, message } = formData;
    
    // Encode data untuk URL
    const subject = encodeURIComponent(`Pesan dari Portofolio Anda (${name})`);
    const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`);
    
    // Alamat email tujuan Anda
    const recipientEmail = 'muh.iam2404@gmail.com'; 

    // Buat URL mailto
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    // Buka aplikasi email default
    window.location.href = mailtoLink;

    // Opsional: berikan feedback ke pengguna setelah membuka email client
    alert('Formulir akan membuka aplikasi email, Harap klik Kirim untuk mengirim pesan.');
    
    // Kosongkan formulir
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Kontak Saya</h2>
        <p>Jangan ragu untuk menghubungi saya melalui formulir di bawah atau melalui form dibawah</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nama:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Pesan:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Kirim Pesan</button>
        </form>
        <div className="social-links">
          <p>Atau hubungi saya di:</p>
          {/* Ubah link email langsung menjadi mailto juga jika ingin konsisten */}
          <a href="mailto:muh.iam2404@gmail.com">muh.iam2404@gmail.com</a>
          <a href="https://www.linkedin.com/in/muhammad-ilham-a28a88223/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Ammm24" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://wa.me/6287871710480" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;