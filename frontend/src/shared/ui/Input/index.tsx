import React from 'react';
import styles from './index.module.scss';

interface InputProps {
  label?: string,
  idElement: string,
  type?: 'text' | 'number' | 'date' | 'email' | 'tel' | 'search',
  props?: any,
}

const Input: React.FC<InputProps> = React.forwardRef(({ label, type = 'text', idElement, ...props }, ref) => {
  return (
    <div className={ styles.wrap }>
      <input
        placeholder={ label }
        id={ idElement }
        type={ type }
        className={ styles.input }
        { ...props }
      />
      { label &&
        <label
          className={ styles.label }
          htmlFor={ idElement }
        >{ label }</label> }
    </div>
  );
});

export default React.memo(Input);
