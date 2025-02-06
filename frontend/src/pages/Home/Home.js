import React, { useState } from 'react'
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'

function Home() {
    let [category,setcategory]=useState('All');
  return (
    <div>
        <Header></Header>
        <ExploreMenu ></ExploreMenu>
    </div>
  )
}

export default Home