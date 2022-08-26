import React from 'react';
import styles from './index.module.scss';

interface SelectProps {
  options: React.OptionHTMLAttributes<any>[];
  placeholder?: string;
  value?: string | number | undefined;
}

const Select: React.FC<SelectProps> = React.forwardRef(({ options, placeholder, ...selectProps }, ref) => {
  return (
    <div className={ styles.wrap }>
      <select className={ styles.select } { ...selectProps }>
        <option>{ placeholder || 'Выбирите значение...' }</option>
        { options.map(({ label, value: valueOption, ...props }, index) => (
          <option
            key={ index }
            value={ valueOption }
            { ...props }
          >{ label }</option>
        )) }
      </select>
    </div>
  );
});

export default React.memo(Select);
