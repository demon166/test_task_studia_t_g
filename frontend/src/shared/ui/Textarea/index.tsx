import React from 'react';
import styles from './index.module.scss';

interface TextAreaProps {
  label?: string,
  idElement: string,
  name: string,
  props?: any,
}

const Textarea: React.FC<TextAreaProps> = React.forwardRef(({ label, idElement, name, ...props }, ref) => {
  return (
    <div className={ styles.wrap }>
      <textarea
        id={ idElement }
        className={ styles.textarea }
        name={ name }
        placeholder={ label }
        rows={ 10 }
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

export default React.memo(Textarea);
