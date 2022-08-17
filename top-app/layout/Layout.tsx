import { LayoutProps } from "./Layout.props"
import styles from './P.module.css';
import cn from 'classnames';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}