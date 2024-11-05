import React from "react";
import styles from "./input.module.css";

export type InputProps = React.ComponentPropsWithRef<"input"> & {
  label?: string;
  icon?: React.ReactNode;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({label, icon, ...rest}, ref) => {
    return (
      <div className={styles.container}>
        {label && (
          <label htmlFor={rest.id} className={styles.label}>
            {label}
          </label>
        )}
        <div className={styles.inputWrapper}>
          {icon && <div className={styles.icon}>{icon}</div>}
          <input
            {...rest}
            ref={ref}
            className={`${styles.input} ${icon ? styles.withIcon : ""}`}
          />
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
