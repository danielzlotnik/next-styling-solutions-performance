import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.logo}>CSS Modules</div>
    </header>
  );
}

export default Header;
