import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '40px 20px',
    textAlign: 'left',
    fontSize: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  };

  const sectionStyle = {
    marginBottom: '20px'
  };

  const columnStyle = {
    flex: '1 1 200px',
    margin: '10px'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '10px'
  };

  return (
    <footer style={footerStyle}>
      <div style={columnStyle}>
        <h4>About Us</h4>
        <p style={sectionStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          interdum quam odio, quis placerat ante luctus eu.
        </p>
      </div>
      <div style={columnStyle}>
        <h4>Quick Links</h4>
        <a href="/home" style={linkStyle}>Home</a>
        <a href="/about" style={linkStyle}>About</a>
        <a href="/services" style={linkStyle}>Services</a>
        <a href="/contact" style={linkStyle}>Contact</a>
      </div>
      <div style={columnStyle}>
        <h4>Contact Us</h4>
        <p style={sectionStyle}>
          1234 Street Name, City, State, 12345<br/>
          Email: info@yourcompany.com<br/>
          Phone: (123) 456-7890
        </p>
      </div>
      <div style={columnStyle}>
        <h4>Follow Us</h4>
        <a href="https://facebook.com" style={linkStyle}>Facebook</a>
        <a href="https://twitter.com" style={linkStyle}>Twitter</a>
        <a href="https://instagram.com" style={linkStyle}>Instagram</a>
        <a href="https://linkedin.com" style={linkStyle}>LinkedIn</a>
      </div>
      <div style={{ flexBasis: '100%', textAlign: 'center', marginTop: '20px' }}>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
