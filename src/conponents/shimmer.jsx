import React from 'react'
import styles from './shimmer.module.css'

const shimmer = () => {
    
  return (
    <div className={styles.container}>
        {Array.from({length: 12}).map(()=>{
        return (<div className={styles.shimmer_card}></div>)
        })}
    </div>
  )
}

export default shimmer