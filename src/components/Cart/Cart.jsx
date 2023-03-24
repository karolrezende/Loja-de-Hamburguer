import CartProduct from '../CartProduct/CartProduct'
import CartTotal from '../CartTotal/CartTotal'
import React, { useState } from 'react'
import styles from './styles.module.scss'
export default function Cart({cartList, remove, msg}) {
  const [price, setPrice] = useState(0)

  if(cartList == 0){
    return (
      <div className={styles.div_cart_empty}>
        <h2 className={styles.h2_cart}>Carrinho de compras</h2>
        <div>
          <p className={styles.div_cart_empty_p}>Sua sacola está vazia</p>
          <p className={styles.div_cart_empty_pp}>Adicione mais itens</p>
        </div>
      </div>
   )
  }else{
    return(
      <div >
        <h2 className={styles.h2_cart}>Carrinho de compras</h2>
        <div className={styles.div_cart}>
          {cartList.map(item => <CartProduct key={item.id} setPrice={setPrice} remove={remove} item={item}/>)}
        </div>
        <CartTotal price={price} />
        <p className={styles.msg}>{msg}</p>
     </div>
    )
  }
}
