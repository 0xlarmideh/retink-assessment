import React from 'react'

const Header = () => {
  return (
    <>
      <header className="header-layout">
        <div className="header-copy">
          <h1>
            Get Advanced AI
            <span className="break-text">
              + Expert Created <span className="purple">Logos</span>
            </span>
          </h1>
          <p className="header-text">
            Boost your sales 10x faster with content customized by our unique
            partnership of human creativity and AI optimization
          </p>
        </div>
        <div className="header-img-container">
          <img src="src/assets/avatar.svg" />
        </div>
      </header>
      <div className="btn-grid">
        <a className="link-with-shadow" href="#">
          Sign Up For The BETA!
        </a>
        <a className="link-with-outline" href="#">
          Sign Up For The BETA!
        </a>
      </div>
    </>
  );
}

export default Header