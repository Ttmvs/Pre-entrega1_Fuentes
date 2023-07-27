import React from 'react'
 
function Item (props){
  return(
    <>
    <h4>{props.name}</h4>
    <p>${props.value}</p>
    </>
  );
}
function ItemListContainer() {
  return (
    <div>
      <Item name="Hoodie The Last Winter Full Zip" value="47.990"></Item>
      <Item name="JEANS BAGGY BLACK WASHED" value="38.990"></Item>
      <Item name="TEE THE LAST WINTER" WASHED value="25.000"></Item>
    </div>
  )
}

export default ItemListContainer