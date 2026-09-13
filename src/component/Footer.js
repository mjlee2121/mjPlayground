import React from 'react'

export const Footer = () => {
  return (
    <div>
      <footer className="page-footer">
          <div className="footer-content">
            <p>© {new Date().getFullYear()} Minji. All rights reserved.</p>
            <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link">
                GitHub
                </a>
                <span className="divider">•</span>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link">
                  LinkedIn
                </a>
                <span className="divider">•</span>
                <a href="https://threads.net" target="_blank" rel="noreferrer" className="social-link">
                  Threads
                </a>
            </div>
          </div>
      </footer>
    </div>
  )
}

export default Footer;
