import { createContext, useEffect, useState } from "react";
import {food_list} from '../frontend_assets/assets'
export const StoreContext=createContext()

const StoreContextProvider=(pros)=>{
    const [cartitem,setCartitem]=useState({})
    const addToCart =(itemId)=>{
        if(!cartitem[itemId]){
            setCartitem({...cartitem,[itemId]:1})
        }
        else{
            setCartitem({...cartitem,[itemId]:cartitem[itemId]+1})
        }
    }
    const removeFromCart =(itemId)=>{
            setCartitem({...cartitem,[itemId]:cartitem[itemId]-1})
    }

    const cartTotal=()=>{
        let total=0
        for(const item in cartitem){
            const itemf=food_list.find((p)=>p._id===item);
            total+=itemf.price*cartitem[item]
        }
        return total;
    }
    const conextValue={
        food_list,
        cartitem,
        setCartitem,
        addToCart,
        removeFromCart,
        cartTotal
    }
    useEffect(()=>{
        console.log(cartitem);
        
    },[cartitem])
    return(
        <StoreContext.Provider value={conextValue}>
            {pros.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;