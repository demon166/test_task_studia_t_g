import React, { TextareaHTMLAttributes } from 'react';
import styles from './index.module.scss';
import { FieldError } from 'react-hook-form';
import classNames from 'classnames';

interface TextAreaProps {
  label?: string,
  idElement: string,
  name: string,
  props?: TextareaHTMLAttributes<any>,
  error: FieldError | undefined;
}

const Textarea: React.FC<TextAreaProps> = React.forwardRef((
  { label, error, idElement, name, ...props }: TextAreaProps, ref) => (
    <div className={styles.wrap}>
      {error && <span className={styles.error}>{error.message}</span>}
      <textarea
        id={idElement}
        className={classNames([styles.textarea, { [styles.textarea_error]: error }])}
        name={name}
        placeholder={label}
        rows={10}
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
));

export default React.memo(Textarea);
