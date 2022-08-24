import React, { DOMAttributes } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';

export type ButtonType = "button" | "submit" | "reset"
export type ButtonStyle = "primary" | "danger"

interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
  typeButton?: ButtonType;
  onClick?: (event: React.MouseEvent) => void;
  styleBtn?: ButtonStyle;
}

const Button: React.FC<IButtonProps> = ({ children, onClick, typeButton, styleBtn, ...props }) => {
  return (
    <button className={classNames([styles.button, styles['button_' + styleBtn]])} onClick={onClick} type={typeButton} { ...props }>
      { children }
    </button>
  );
};

export default Button;
