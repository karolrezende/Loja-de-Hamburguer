import ButtonCart from '../ButtonCart/ButtonCart'
import React from 'react'
import styles from './styles.module.scss'
export default function Product({hamburguer, addCartOn}) {
  return (
    <div className={styles.div}>
        <div className={styles.div__img}>
          <img src={hamburguer.img} alt="Imagem do produto" />
        </div>
        <div className={styles.div__container}> 
          <h2>{hamburguer.name}</h2>
          <p>{hamburguer.category}</p>
          <span >R${hamburguer.price},00</span>
          <p></p>
          <ButtonCart size={16} addCartOn={addCartOn} id={hamburguer.id} color={'green'}>Adicionar</ButtonCart>
        </div>
    </div>
  )
}
