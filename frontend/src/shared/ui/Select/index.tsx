import React, { SelectHTMLAttributes } from 'react';
import styles from './index.module.scss';
import { FieldError } from 'react-hook-form';
import classNames from 'classnames';

interface ISelectProps extends SelectHTMLAttributes<any> {
  options: React.OptionHTMLAttributes<any>[];
  placeholder?: string;
  value?: string | number | undefined;
  error: FieldError | undefined;
}

const Select: React.FC<ISelectProps> = React.forwardRef((
  { options, error, placeholder, ...props }: ISelectProps, ref) => (
    <div className={styles.wrap}>
      {error && <span className={styles.error}>{error.message}</span>}
      <select
        className={classNames([styles.select, { [styles.select_error]: error }])}
        {...props}
      >
        <option>{placeholder || 'Выбирите значение...'}</option>
        {options.map(({ id, label, value: valueOption, ...optionProps }) => (
          <option
            key={id}
            value={valueOption}
            {...optionProps}
          >
            {label}
          </option>
        ))}
      </select>
    </div>
));

export default React.memo(Select);
