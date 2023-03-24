import Product from './components/Product/Product'
import { useState, useEffect } from 'react'
import { hambApi } from './api'
import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'
import styles from './app.module.scss'
function App() {

  const [addCart, setAddCart] = useState([])
  const [hamb, setHamb] = useState([])
  const [msg, setMsg] = useState('')
  useEffect(()=>{
      async function apiFunc(){
          try{
              const api = await hambApi.get()
              setHamb(api.data)
          }catch(error){
              console.log(error)
          }
      }apiFunc()
      
    }, [])

    function addCartOn(id){
      if(addCart.length===0){
        setAddCart([...addCart, hamb.find(hamburguer => hamburguer.id === id)])
      }
      else{
        addCart.forEach(hamburguer=>{
          if(hamburguer.id !== id){
            setAddCart([...addCart, hamb.find(hamburguer => hamburguer.id === id)])
            setMsg('')
          }
          else{
            setAddCart([...addCart]) 
            setMsg('Item já está no carrinho')
          }
        })
      }
    } 

    
    
    ///pesquisa por nome 
    function search(item){
      setHamb(hamb.filter(hambs=> hambs.name === item))
    }
    
    //remove do carrinho 
    function remove(item){
      setAddCart(addCart.filter(hambs=> hambs.id !== item))
    }

   

  return (
    <>
      <Header search={search}/>
      <div className={styles.div_app}>
        <div className={styles.div_app_productList}>
          {hamb.map(hamburguer=><Product hamburguer={hamburguer} addCartOn={addCartOn} key={hamburguer.id}/>)}
        </div>
        <Cart cartList={addCart} remove={remove} msg={msg}/>
      </div>
    </>
  )
}

export default App
