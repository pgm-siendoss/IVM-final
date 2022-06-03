import React from 'react'
import styles from "./Button.module.scss"

const Button = ({color= '', variant= '', children, onClick}) => {
    return (
      <button onClick={onClick} className={`${styles.btn} ${styles[variant]} ${styles[color]}`}>
          {children}
      </button>
    )
}

export default Button