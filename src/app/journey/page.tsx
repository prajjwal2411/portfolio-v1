import styles from './journey.module.css';

export default function Journey() {
  return (
    <>
      <div className="">
        <div className={`${styles.timeline}`} >
          
          <div className={`${styles.container} ${styles.rightContainer}`}>
            <div className={`${styles.textBox}`}>
              <h2>Bachelors Of Computer Applications</h2>
              <small>2015-2018</small>
              <p>Lorem ipsum</p>
            </div>
          </div>

          <div className={`${styles.container} ${styles.leftContainer}`}>
            <div className={`${styles.textBox}`}>
              <h2>Masters Of Computer Applications</h2>
              <small>2018-2021</small>
              <p>Lorem ipsum</p>
            </div>
          </div>

          <div className={`${styles.container} ${styles.rightContainer}`}>
            <div className={`${styles.textBox}`}>
              <h2>Value Coders Pvt. Ltd.</h2>
              <small>2021-2024</small>
              <p>Lorem ipsum</p>
            </div>
          </div>

          <div className={`${styles.container} ${styles.leftContainer}`}>
            <div className={`${styles.textBox}`}>
              <h2>Nielsen IQ</h2>
              <small>2024-Present</small>
              <p>Lorem ipsum</p>
            </div>
          </div>

          <div className={`${styles.container} ${styles.rightContainer}`}>
            <div className={`${styles.textBox}`}>
              <h2>Value Coders Pvt. Ltd.</h2>
              <small>2021-2024</small>
              <p>Lorem ipsum</p>
            </div>
          </div>

          <div className={`${styles.container} ${styles.leftContainer}`}>
            <div className={`${styles.textBox}`}>
              <h2>Nielsen IQ</h2>
              <small>2024-Present</small>
              <p>Lorem ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
