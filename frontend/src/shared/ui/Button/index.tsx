import React, { ButtonHTMLAttributes } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';

export type ButtonStyle = 'primary' | 'danger';

interface IButtonProps extends ButtonHTMLAttributes<any> {
  onClick?: (event: React.MouseEvent) => void;
  styleBtn?: ButtonStyle;
}

const Button: React.FC<IButtonProps> = (
  { children, className, type, onClick, styleBtn, ...props }) => (
    <button
      className={classNames([styles.button, className, styles[`button_${styleBtn}`]])}
      onClick={onClick}
      type={type === 'button' ? 'button' : 'submit'}
      {...props}
    >
      {children}
    </button>
);

export default Button;
