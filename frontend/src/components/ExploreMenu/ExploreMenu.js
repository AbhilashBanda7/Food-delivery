import React from 'react'
import './ExloreMenu.css'
import { menu_list } from '../../frontend_assets/assets'
function ExploreMenu() {
  return (
    <div className='exploremenu'>
        <h2>ExploreMenu</h2>
        <p className='menutext'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, quas sapiente quasi doloremque pariatur exercitationem porro harum blanditiis nostrum nulla eos. Beatae doloribus, maiores assumenda iste quam delectus et magni?</p>
        <div className='explore-menu-list'>

        {menu_list.map((item,index)=>(
            <div className='explore-menu-item'> 
            <img src={item.menu_image} alt="" />
            <p>{item.menu_name}</p>
            </div>
        ))}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu