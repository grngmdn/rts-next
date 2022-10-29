import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Registration.module.css';

const Registration = () => {
  return (
    <>
      <div className={styles.outer}>
        <main className={styles.container}>
          <section className={styles.section}>
            <h1 className={styles.heading}>MEMBERSHIP FORM</h1>
            <div className={styles.line}></div>
            <p>
              If you are looking to join us and become a part of our
              organisation, we have provided a Membership Registration form
              below. Please print and complete the application form by filling
              in all the sections with your relevant details. After completion
              you may contact any of our Key Members (available in "Contact us"
              page) and arrange for the hand-in of the form. The Membership
              Joining fees are:
            </p>
            <ul>
              <li className={styles.list}>Ordinary member: £30</li>
              <li className={styles.list}>
                Life member: £100 (For each person)
              </li>
            </ul>
            <p>Click the image below to download the form or click here.</p>
            <Link href='http://readingtamusamajuk.com/img/registration.pdf'>
              <a>
                <Image
                  alt='membership form'
                  height={300}
                  width={225}
                  src='/form.jpg'
                />
              </a>
            </Link>
          </section>
          <br />
          <div className={styles.line}></div>
          <section className={styles.section}>
            <h3 className={styles.subheading}>STANDING ORDER MANDATE</h3>
            <p>
              Once you are a member of Reading Tamu Samaj UK, a monthly direct
              debit of £10 will be required as part of RTS SYORA.
            </p>
            <p>
              Click the image below to download the Standing Order Mandate form
              or click here.
            </p>
            <Link href='http://readingtamusamajuk.com/img/registration2.pdf'>
              <a>
                <Image
                  height={300}
                  width={225}
                  alt='standing order mandate'
                  src='/order.jpg'
                />
              </a>
            </Link>
          </section>
        </main>
      </div>
    </>
  );
};

export default Registration;
