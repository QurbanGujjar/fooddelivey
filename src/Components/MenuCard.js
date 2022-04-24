import { ChevronRightRounded } from '@material-ui/icons'
import React from 'react'

function MenuCard({imgSrc,name,isActive}) {
  return (
   <div className={`rowMenuCard ${isActive? "active":""}`}>
       <div className="imgBox">
           <img src={imgSrc} alt="" />
       </div>
       <h3>{name}</h3>
       <i className="loadMenu">
           <ChevronRightRounded />
       </i>

   </div>
  )
}

export default MenuCard
