import React from 'react'
import {useTitle} from '../../hooks/useTitle'
import { useCart } from '../../context'
import { CartEmpty } from './component/CartEmpty'
import { CartList } from './component/CartList'


export const CartPage = () => {
const {cartList} = useCart()
 useTitle(`Cart (${cartList.length})`)
  return (
    <main>
        {cartList.length ? <CartList /> : <CartEmpty />}
    </main>
  )
}
