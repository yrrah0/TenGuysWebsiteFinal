import React from 'react';
import './AboutUs.css';

const AboutUsFR = () => {
  const faqs = [
    {
      question: 'Qu\'est-ce que Ten Guys Esports ?',
      answer: 'Ten Guys Esports est une organisation esports de premier plan dédiée à fournir des produits de haute qualité et à soutenir la communauté esports.'
    },
    {
      question: 'Comment puis-je rejoindre l\'équipe ?',
      answer: 'Vous pouvez rejoindre l\'équipe en participant à nos essais ouverts ou en postulant via notre site web.'
    },
    {
      question: 'Où puis-je acheter des produits Ten Guys Esports ?',
      answer: 'Vous pouvez acheter nos produits directement dans notre boutique en ligne sur ce site.'
    },
  ];

  const events = [
    { event: 'Championnat de Printemps', location: 'Toronto', date: '15 avril 2024' },
    { event: 'Showdown d\'été', location: 'Ottawa', date: '20 juin 2024' },
    { event: 'Bataille d\'Automne', location: 'Montréal', date: '10 septembre 2024' },
  ];

  return (
    <div className="about-us">
      <button className="language-button" onClick={() => window.location.href = '/about'}>
        English
      </button>
      <h2>À Propos de Nous</h2>
      <p>
        Ten Guys Esports est une organisation esports de premier plan dédiée à fournir les meilleurs produits de merchandising esports pour nos fans. Notre équipe est passionnée par le jeu et nous nous efforçons de soutenir notre communauté grâce à des produits de haute qualité et un excellent service client.
      </p>
      
      <h3>Questions & Réponses</h3>
      <div className="faq-section">
        {faqs.map((faq, index) => (
          <div key={index} className="faq">
            <h4>{faq.question}</h4>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>

      <h3>Événements à Venir</h3>
      <table className="events-table">
        <thead>
          <tr>
            <th>Événement</th>
            <th>Lieu</th>
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

export default AboutUsFR;
