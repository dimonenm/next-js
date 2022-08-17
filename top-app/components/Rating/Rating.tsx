import { RatingProps } from "./Rating.props"
import styles from './P.module.css';
import cn from 'classnames';

export const Rating = ({ size = 'm', children, className, ...props }: RatingProps): JSX.Element => {
  return (
    <>
      <p className={cn(styles.p, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
      },
        { ...props })}>
        {children}
      </p>
    </>
  )
}