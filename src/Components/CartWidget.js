import React from 'react'
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import Count from "./Count"



function CartWidget() {
  return (
    <>
    <div className='right-align'>
    <ShoppingCartCheckoutOutlinedIcon fontSize='large' color='success' className='right-align'/>
    <Count/>
    </div>
    </>
  )
}


export default CartWidget