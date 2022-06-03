import React from 'react'
import styles from "./Modal.module.scss"

const Modal = ({show, onClose, children}) => {
    if (!show) {
        return null
    }
    return (
        <div className={styles.modal} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <h2>Pasta in 4 steps</h2>
                {children}
                <button onClick={onClose} className={styles.button}>Cancel</button>
            </div>
        </div>
    )
}

export default Modal