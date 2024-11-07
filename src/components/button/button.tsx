import React from "react";
import cx from "classnames";
import styles from "./button.module.css";

export type ButtonProps = React.ComponentPropsWithRef<"button"> & {
  children?: React.ReactNode;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({children, ...rest}, ref) => {
    const buttonClassNames = cx(styles.button, rest.className);

    return (
      <button ref={ref} {...rest} className={buttonClassNames}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
