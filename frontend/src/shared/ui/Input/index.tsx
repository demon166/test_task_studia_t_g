import React, { InputHTMLAttributes } from 'react';
import styles from './index.module.scss';
import { FieldError } from 'react-hook-form';
import classNames from 'classnames';

interface InputProps extends InputHTMLAttributes<any> {
  label?: string;
  idElement: string;
  type?: 'text' | 'number' | 'date' | 'email' | 'tel' | 'search';
  error?: FieldError | undefined;
}

const Input: React.FC<InputProps> = React.forwardRef(({ label, error, type = 'text', idElement, ...props }: InputProps, ref) => {
  console.log(error);
  return (
    <div className={styles.wrap}>
      {error && <span className={styles.error}>{error.message}</span>}
      <input
        placeholder={label}
        id={idElement}
        type={type}
        className={classNames([styles.input, { [styles.input_error]: error }])}
        {...props}
      />
      {label
        && (
          <label
            className={styles.label}
            htmlFor={idElement}
          >
            {label}
          </label>
        )}
    </div>
  );
});

export default React.memo(Input);
