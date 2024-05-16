import React from 'react';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Ласкаво просимо до сервісу оренди кемперів</h1>
        <p>Знайдіть ідеальний кемпер для вашої наступної пригоди!</p>
      </header>
      <section className={styles.features}>
        <h2>Чому обирати нас?</h2>
        <p>
          Ми пропонуємо найкращий вибір кемперів за доступними цінами в Україні.
        </p>
        <img
          src="https://www.fiatcamper.com/content/dam/camper/cross/product/fiat-ducato-camper-van/modular-dimensions/cover-2.jpg"
          alt="Кемпер в природі"
          className={styles.featureImage}
        />
        <p>
          Наші кемпери ідеально підходять для подорожей з сім'єю та друзями.
          Кожен кемпер оснащений усім необхідним для комфортного проживання та
          подорожей.
        </p>
      </section>
      <section className={styles.testimonials}>
        <h2>Відгуки клієнтів</h2>
        <p>
          «Завдяки вашому сервісу моя родина мала незабутній відпочинок! Кемпер
          був чистим і комфортним. Рекомендую всім!» — Олена К.
        </p>
      </section>
    </div>
  );
}

export default HomePage;
