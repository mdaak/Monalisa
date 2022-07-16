import React from 'react'
import styles from '../styles/Layout.module.css';

function Layout({ children }) {
  return (
    <div className={styles.layoutStyle} >
      {children}
    </div>

  )
}

export default Layout;