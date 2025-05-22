import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      borderTop: '1px solid #eaeaea',
      padding: '20px',
      textAlign: 'center',
      width: '100%',
      backgroundColor: 'white',
      marginTop: '2rem'
    }}>
      <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>
        © 2024-2025{' '}
        <a 
          href="https://fixweb.cz" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            color: '#0070f3',
            textDecoration: 'none'
          }}
        >
          by FixWeb.cz
        </a>
      </p>
    </footer>
  );
};

export default Footer; 