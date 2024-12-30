import {forwardRef} from "react";
import styles from "./inputField.module.css";

export type InputFieldProps = Omit<
  React.ComponentPropsWithRef<"input">,
  "type"
> & {
  label?: string;
  icon?: React.ReactNode;
  type?:
    | "text"
    | "search"
    | "password"
    | "email"
    | "number"
    | "date"
    | "datetime-local"
    | "month"
    | "week"
    | "tel"
    | "time"
    | "url"
    | "week";
};

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
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

InputField.displayName = "InputField";

export default InputField;
