import React from 'react'

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-heading">Code Veda 2.0</div>
          <p style={{ fontSize: 13 }}>
            Where ancient wisdom illuminates the path to digital enlightenment. Join us in crafting experiences
            that are as mindful as they are innovative.
          </p>
        </div>

        <div>
          <div className="footer-heading">Quick Links</div>
          <ul className="footer-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#Why Code Veda">Why Code Veda</a>
            </li>
            <li>
              <a href="#Problem Statements">Problem Statements</a>
            </li>
          </ul>
        </div>

        <div>
          <div className="footer-heading">Connect With Us</div>
          <ul className="footer-links">
            <li>
              <a href="https://x.com" target="_blank" rel="noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">&copy; 2025 Code Veda 2.0. All rights reserved.</div>
    </footer>
  )
}

export default Footer
