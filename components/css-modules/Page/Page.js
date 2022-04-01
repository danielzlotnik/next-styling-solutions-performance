import styles from './Page.module.scss';

function Page({ children }) {
  return <div className={styles.pageWrapper}>{children}</div>;
}

export default Page;
