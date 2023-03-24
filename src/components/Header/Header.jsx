import React from 'react'
import Search from '../Search/Search'
import styles from './header.module.scss'

export default function Header({search}) {
  return (
    <div className={styles.div}>
      <div className={styles.margin}>
        <div className={styles.div__flex}>
          <img src="/assets/logo.png" alt="Logo hamburgueria" />
          <Search search={search}/>
        </div>
      </div>
    </div>
  )
}
