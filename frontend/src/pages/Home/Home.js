import React, { useState } from 'react'
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Fooddisplay from '../../components/Fooddisplay/Fooddisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

function Home() {
    let [category,setcategory]=useState('All');
  return (
    <div>
        <Header></Header>
        <ExploreMenu category={category} setcategory={setcategory}></ExploreMenu>
        <Fooddisplay category={category}></Fooddisplay>
        <AppDownload></AppDownload>
    </div>
  )
}

export default Home