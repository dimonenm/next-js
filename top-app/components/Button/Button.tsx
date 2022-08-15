import { ButtonProps } from "./Button.props"
import styles from './Button.module.css';
import cn from 'classnames';


export const Button = ({ appearence, arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className,
        {
          [styles.primary]: appearence === 'primary',
          [styles.ghost]: appearence === 'ghost',
        })}
      {...props}
    >
      {children}
      {arrow !== 'none' && }
    </button>
  )
}