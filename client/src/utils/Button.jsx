import React from 'react';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  isDisabled = false,
  type = 'button',
  style
}) => {
  const baseStyle = {
    width: '198px', // w-49.5
    height: '56px', // h-14
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: '600',
    fontFamily: 'var(--font-brand)',
  };

  const variantStyles = {
    primary: {
      backgroundColor: 'var(--color-brand)',
      color: '#fff',
      border: 'none',
    },

    secondary: {
      backgroundColor: 'var(--color-secondarybtn)',
      color: 'var(--color-brand)',
      border: 'none',
    },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      style={{
        ...baseStyle,
        ...variantStyles[variant],...style
      }}
    >
      {children}
    </button>
  );
};

export default Button;