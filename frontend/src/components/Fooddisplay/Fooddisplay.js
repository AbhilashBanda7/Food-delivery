import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import Fooditem from '../Fooditem/Fooditem'
import '../Fooddisplay/Fooddisplay.css'
function Fooddisplay({category}) {
    const {food_list}=useContext(StoreContext)
  return (
    <div className='food-display'>
        <h4>Food</h4>
        <div className='food-list'>
            {
                food_list.map((item,index)=>{
                    if(category==='All'||category===item.category){
                        return <Fooditem key={index} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price}></Fooditem>
                    }
                })
            }
        </div>
    </div>
  )
}

export default Fooddisplay