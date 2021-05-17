import React from "react";

export const Button = (props) => {
  const { type, children } = props;

  return (
    <button className={buttonType[type]} {...props}>
      {children}
    </button>
  );
};

const buttonType = {
  primary: `
    w-48 min-w-max 
    h-12  
    flex items-center justify-center 
    rounded-md  
    bg-secondary hover:bg-secondary-dark 
    text-xl font-bold text-white 
    `,
  "primary-icon": `
    w-11 h-11 
    flex items-center justify-center 
    rounded-md  
    bg-secondary hover:bg-secondary-dark 
    text-xl font-bold text-white 
    `,
  secondary: `
    w-56 min-w-max 
    h-12 
    py-3 px-10 
    flex items-center justify-center
    border-2 rounded-md border-secondary hover:border-4 
    text-xl font-bold text-black-light
    `,
  "secondary-active": `
    w-56 min-w-max 
    h-11 
    py-3 px-10 
    flex items-center justify-center 
    border-2 rounded-md border-black-green hover:border-4
    bg-secondary hover:bg-white
    text-lg font-bold text-white hover:text-black-light
    `,
  nav: `
    min-w-max w-auto  
    py-1.5 px-3
    flex items-center justify-center 
    bg-transparent 
    text-white text-base font-bold
    `,
};

export default Button;
