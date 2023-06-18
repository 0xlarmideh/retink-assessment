import React from 'react'

const Button = ({title, className, onClick}) => {
  return (
    <>
      <a className={className} onClick={onClick}  href="#">
        {title}
      </a>
    </>
  );
}

export default Button