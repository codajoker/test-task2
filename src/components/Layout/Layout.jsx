import { Footer } from 'components/Footer/Footer';
import Nav from '../Nav/Nav';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
