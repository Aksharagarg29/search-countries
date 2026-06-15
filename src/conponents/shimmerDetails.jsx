import React from 'react'
import styles from './shimmerDetails.module.css'

const shimmerDetails = () => {
  return (
    <section className={styles.details}>
        <div className={styles.flag}></div>
        <div className={styles.info}>
            <h1></h1>
            <div className={styles.more}>
                <div className={styles.items}></div>
                <div className={styles.items}></div>
                <div className={styles.items}></div>
                <div className={styles.items}></div>
            </div>
        </div>
    </section>
  )
}

export default shimmerDetails