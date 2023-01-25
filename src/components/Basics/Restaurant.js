import React, { useState } from 'react'
import Menucard from './Menucard'
import Menu from './menuApi'
import './style.css'
import Navbar from './Navbar'
const uniqueList=[
    ... new Set(Menu.map((element)=>{
        return element.category;
    })),"All",
]
const Restaurant = () => {
    const[menuData,setmenuData]=useState(Menu);
    const [menuList,setMenuList]=useState(uniqueList);
    const filterItem=(category)=>{
        if(category==="All"){
            setmenuData(Menu);
            return;
        }
        const updatedList=Menu.filter((element)=>{
            return element.category===category;
        });
        setmenuData(updatedList);
    }
  return (
    <>
    <Navbar filterItem={filterItem} menuList={menuList}/>
    <Menucard menuData={menuData}/>
        
    </>
  )
}

export default Restaurant
