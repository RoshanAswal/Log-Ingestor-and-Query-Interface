import React from 'react'
import styles from './LogCard.module.css';

const LogCard = (props) => {

    const fields=['level','message','resourceId','timestamp',
    'traceId','spanId','commit','parentResourceId'];

    return (
    <div className={styles.logCard}>
        <h2>Log {props.index+1}</h2>
        {
            fields.map((field,index)=>(
                <div className={styles.info} key={index}>
                    <h3>{field}</h3>
                    <h3>{props.log.field}</h3>
                </div>
            ))
        }
    </div>
  )
}

export default LogCard
