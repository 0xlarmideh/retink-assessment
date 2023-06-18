import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="footer-top-grid">
        <div>
          <img src="/src/assets/retink.png" alt="retink-logo" />
        </div>
        <div>
          <p>Connect with us</p>
          <div className="social-link">
            <a href="#">
              <img src="/src/assets/footer/fb.png" alt="facebook-link" />
            </a>
            <a href="#">
              <img src="/src/assets/footer/twitter.png" alt="twitter-link" />
            </a>
            <a href="#">
              <img src="/src/assets/footer/ig.png" alt="instagram-link" />
            </a>
            <a href="#">
              <img src="/src/assets/footer/linkedin.png" alt="linkedin-link" />
            </a>
            <a href="#">
              <img src="/src/assets/footer/ytube.png" alt="youtube-link" />
            </a>
            <a href="#">
              <img
                src="/src/assets/footer/pinterest.png"
                alt="pinterest-link"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom-grid">
        <div>
          <strong>
            <p>Product by Retink Media UG</p>
            <p>Bonn, Germany</p>
          </strong>
        </div>
        <div>
          <strong>
            <p>Get Early Acess</p>
            <p>Provide Feedback</p>
          </strong>
        </div>
      </div>
    </>
  );
}

export default Footer