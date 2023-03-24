import React from 'react'
import ButtonRemove from '../ButtonRemove/ButtonRemove'
import styles from './styles.module.scss'
export default function CartProduct({item, remove, setPrice}) {
  setPrice(item.price)
  return (
    <div className={styles.div}>
      <img className={styles.div__img} src={item.img} alt="Imagem do produto" />
      <div className={styles.div__container}>
        <h3 className={styles.div__container_name}>{item.name}</h3>
        <span className={styles.div__container_category}>{item.category}</span>
      </div>
      <ButtonRemove size={8} color={'grey'} remove={remove} id={item.id}>remover</ButtonRemove>
    </div>
  )
}
