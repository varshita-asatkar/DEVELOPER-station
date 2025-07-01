import React, { useEffect, useState } from 'react';
import './LandingPage.css';

function LandingPage() {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    setProjects([
      {
        id: 1,
        name: 'E-commerce Platform',
        description: 'A scalable web platform for online sales with integrated payments and analytics.',
        imageUrl: '/project1.jpg'
      },
      {
        id: 2,
        name: 'Social Media App',
        description: 'A modern app allowing users to connect, share, and communicate in real-time.',
        imageUrl: '/project2.jpg'
      },
      {
        id: 3,
        name: 'AI Chatbot Service',
        description: 'A powerful AI chatbot solution to automate customer support for businesses.',
        imageUrl: '/project3.jpg'
      }
    ]);

    setClients([
      {
        id: 1,
        name: 'Sarah Johnson',
        designation: 'Marketing Manager',
        description: 'Sarah specializes in crafting marketing strategies for fast-growing tech startups.',
        imageUrl: '/client1.jpg'
      },
      {
        id: 3,
        name: 'Emily Chen',
        designation: 'UX Designer',
        description: 'Emily designs engaging user experiences and intuitive interfaces.',
        imageUrl: '/client3.jpg'
      }
    ]);
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert("Subscribed successfully!");
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="landing-page">
      {/* Header/Navbar */}
      <header className="navbar">
        <img src="/logo.jpg" alt="Developer Station Logo" className="logo" />
        <h1 className="business-name">Developer Station</h1>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Landing Page </h2>
        <p>Explore our projects and happy clients below!</p>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>Our Projects</h2>
        <div className="cards-container">
          {projects.map((proj) => (
            <div className="card" key={proj.id}>
              <img
                src={proj.imageUrl}
                alt={proj.name}
                style={{ width: '300px', height: '200px', objectFit: 'cover' }}
              />
              <h3>{proj.name}</h3>
              <p>{proj.description}</p>
              <button>Read More</button>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <h2>Subscribe to our Newsletter</h2>
        <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      {/* Clients Section */}
      <section className="clients">
        <h2>Happy Clients</h2>
        <div className="cards-container">
          {clients.map((client) => (
            <div className="card" key={client.id}>
              <img
                src={client.imageUrl}
                alt={client.name}
                style={{
                  width: '150px',
                  height: '150px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  marginTop: '15px'
                }}
              />
              <h3>{client.name}</h3>
              <h4>{client.designation}</h4>
              <p>{client.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleContactSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Mobile Number" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default LandingPage;


