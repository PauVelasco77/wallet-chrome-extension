import React from "react";
import styles from "./button.module.css";

export type ButtonProps = React.ComponentPropsWithRef<"button"> & {
  children?: React.ReactNode;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({children, ...rest}, ref) => {
    return (
      <button ref={ref} {...rest} className={styles.button}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
