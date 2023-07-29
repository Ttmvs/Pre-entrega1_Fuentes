import React from 'react'
import Hoodie from "../Assets/hoodie_the_las_winter.png"
import Jeans from "../Assets/jeans_baggy_black.png"
import Tshirt from "../Assets/tee_the_last_winter.png"
import SobreNosotros from './SobreNosotros'
function Item (props){
  return(
    <>
    <h4>{props.name}</h4>
    <p className='flow-text'>${props.value}</p>
    </>
  );
}
function ItemListContainer() {
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col s3 center-align'><Item name="Hoodie The Last Winter Full Zip" value="47.990"></Item>
          
          </div>
          <div className='col s4 center-align' ><Item name="JEANS BAGGY BLACK WASHED" value="38.990"></Item>
          
        </div>
          <div className='col s4 center-align'><Item name="TEE THE LAST WINTER" WASHED value="25.000"></Item>
        
        </div>
      </div>
    </div>
   </>


  )
}


export default ItemListContainer