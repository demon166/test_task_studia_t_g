import React from 'react';
import styles from './index.module.scss';

interface SelectProps {
  options: React.OptionHTMLAttributes<any>[]
}

const Select: React.FC<SelectProps> = React.forwardRef(({ options, ...selectProps }, ref) => {
  return (
    <div className={ styles.wrap }>
      <select className={ styles.select } { ...selectProps }>
        { options.map(({ label, ...props }) => (
          <option { ...props }>{ label }</option>
        )) }
      </select>
    </div>
  );
});

export default React.memo(Select);
