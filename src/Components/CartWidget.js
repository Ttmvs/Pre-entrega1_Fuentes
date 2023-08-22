import React from 'react'
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import ItemCount from "./ItemCount"



function CartWidget() {
  return (
    <>
    <div className='right-align'>
    <ShoppingCartCheckoutOutlinedIcon fontSize='large' color='success' className='right-align'/>
    <ItemCount/>
    </div>
    </>
  )
}


export default CartWidget