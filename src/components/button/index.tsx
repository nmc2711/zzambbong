import React, { ButtonHTMLAttributes, forwardRef } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  contentWidth?: string;
  btnColor?: string;
  fixedHeight?: string;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      contentWidth = 'auto',
      btnColor = 'red',
      fixedHeight,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        {...props}
        style={{
          width: contentWidth,
          backgroundColor: btnColor,
        }}
      >
        {children}
      </button>
    );
  }
);

export default Button;
