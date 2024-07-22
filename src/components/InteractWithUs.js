import React, { useState } from 'react';
import './InteractWithUs.css';

const InteractWithUs = () => {
  const videos = [
    {
      title: 'Welcome to Ten Guys Esports',
      url: 'https://www.youtube.com/embed/your-video-id-1'
    },
    {
      title: 'Team Highlights',
      url: 'https://www.youtube.com/embed/your-video-id-2'
    },
    {
      title: 'Behind the Scenes',
      url: 'https://www.youtube.com/embed/your-video-id-3'
    },
  ];

  const [feedback, setFeedback] = useState('');
  const [feedbackList, setFeedbackList] = useState([]);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      setFeedbackList([...feedbackList, feedback]);
      setFeedback('');
      alert('Thank you for your feedback!');
    } else {
      alert('Please enter your feedback before submitting.');
    }
  };

  return (
    <div className="interact-with-us">
      <h2>Interact With Us</h2>
      <p>Watch the latest videos from our team and stay connected with Ten Guys Esports.</p>
      <div className="video-section">
        {videos.map((video, index) => (
          <div key={index} className="video">
            <h3>{video.title}</h3>
            <div className="video-container">
              <iframe
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      <h3>Leave Feedback</h3>
      <form className="feedback-form" onSubmit={handleFeedbackSubmit}>
        <textarea
          value={feedback}
          onChange={handleFeedbackChange}
          placeholder="Enter your feedback here"
          rows="4"
        />
        <button type="submit" className="button">Submit</button>
      </form>

      <h3>Feedback Received</h3>
      <ul className="feedback-list">
        {feedbackList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default InteractWithUs;
