import React from 'react'

const Button = ({title, className}) => {
  return (
    <>
      <a className={className}  href="#">
        {title}
      </a>
    </>
  );
}

export default Button