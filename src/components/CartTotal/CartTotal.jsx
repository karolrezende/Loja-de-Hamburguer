import ButtonRemoveAll from '../ButtonRemoveAll/ButtonRemoveAll'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
export default function CartTotal({price}) {
  const [total, setTotal] = useState(0)
  let totality = total +price
  useEffect(() => {
    setTotal(totality)
  }, [price])
  
  return (
    <div className={styles.div}>
      <div className={styles.div_container}>
        <h4>Total</h4>
        <p>R${total},00</p>
      </div>
      <div className={styles.div_button}>
        <ButtonRemoveAll size={80} color={'grey'}>Remover Tudo</ButtonRemoveAll>
      </div>
    </div>
  )
}
