import React, { useState } from 'react'
import Button from '../Button/Button'
import styles from './styles.module.scss'
export default function Search({search}) {
  const [item, setItem] = useState('')
  return (
    <div className={styles.div}>
      <input type="text" name="text" onChange={(event)=> setItem(event.target.value)} className={styles.div__input} placeholder='Digitar pesquisa' />
      <Button size={20} color={'green'} search={search} value={item}>
        Pesquisar
      </Button>
    </div>
  )
}
