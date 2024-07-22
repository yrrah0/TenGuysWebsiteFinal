import React from 'react';
import Chat from './Chat'; // Ensure the correct import path
import './CustomerSupportPage.css';

function CustomerSupportPage() {
  return (
    <div className="customer-support-page">
      <h2>Customer Support</h2>
      <p>If you have any issues, please contact us at support@tenguys.com or use the chat below.</p>
      <Chat />
    </div>
  );
}

export default CustomerSupportPage;
