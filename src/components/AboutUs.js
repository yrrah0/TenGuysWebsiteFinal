import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const faqs = [
    {
      question: 'What is Ten Guys Esports?',
      answer: 'Ten Guys Esports is a premier esports organization dedicated to providing high-quality merchandise and supporting the esports community.'
    },
    {
      question: 'How can I join the team?',
      answer: 'You can join the team by participating in our open tryouts or applying through our website.'
    },
    {
      question: 'Where can I buy Ten Guys Esports merchandise?',
      answer: 'You can buy our merchandise directly from our online shop on this website.'
    },
  ];

  const events = [
    { event: 'Spring Championship', location: 'Toronto', date: 'April 15, 2024' },
    { event: 'Summer Showdown', location: 'Ottawa', date: 'June 20, 2024' },
    { event: 'Fall Brawl', location: 'Montreal', date: 'September 10, 2024' },
  ];

  return (
    <div className="about-us">
      <button className="language-button" onClick={() => window.location.href = '/about-fr'}>
        Français
      </button>
      <h2>About Us</h2>
      <p>
        Ten Guys Esports is a leading esports organization dedicated to providing the best esports merchandise for our fans. Our team is passionate about gaming and we strive to support our community through high-quality products and excellent customer service.
      </p>
      
      <h3>Q&A</h3>
      <div className="faq-section">
        {faqs.map((faq, index) => (
          <div key={index} className="faq">
            <h4>{faq.question}</h4>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>

      <h3>Upcoming Events</h3>
      <table className="events-table">
        <thead>
          <tr>
            <th>Event</th>
            <th>Location</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.event}</td>
              <td>{event.location}</td>
              <td>{event.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AboutUs;
