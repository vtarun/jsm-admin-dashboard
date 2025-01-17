import React from 'react'

const Button = ({bgColor, color, size, text, borderRadius, className}) => {
  return (
    <button 
      type="button" 
      style={{backgroundColor: bgColor, color, borderRadius}}
      className={`text-${size} p-2 hover:drop-shadow-xl ${className}`}
    >
      {text}
    </button>
  )
}

export default Button;
