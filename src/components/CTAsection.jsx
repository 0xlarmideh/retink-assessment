import React from 'react'
import Button from './Button'

const CTAsection = () => {
  return (
    <div className='cta-section'>
      <p className="purple">Sign up for the BETA to see more</p>
      <div className="cta-btn-grid">
        <div>
          <Button title="Business name" className={"btn-grey btn"} />
        </div>
        <div>
          <Button title="Email" className={"btn-grey btn "} />
        </div>
      </div>

      <div>
        <Button title="Notify me" className={"btn-purple btn"} />
      </div>

      <div>
        <Button
          title="Sign up a freelance partner"
          className={"btn btn-outline"}
        />
      </div>
    </div>
  );
}

export default CTAsection