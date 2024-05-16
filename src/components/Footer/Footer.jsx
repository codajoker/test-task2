import React from 'react';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} Сервіс оренди кемперів. Всі права захищені.
      </p>
      <p>Адреса: Київ, Україна</p>
      <p>Телефон: +380 XX XXX XX XX</p>
    </footer>
  );
}
