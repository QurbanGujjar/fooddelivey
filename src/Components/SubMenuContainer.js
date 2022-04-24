import { ChevronRightRounded } from '@material-ui/icons'
import React from 'react'

function SubMenuContainer({name}) {
  return (
   <div className="subMenuContainer">
       <h3>{name}</h3>
       <div className="viewAll">
           <p>View All</p>
           <i><ChevronRightRounded /></i>
       </div>
   </div>
  )
}

export default SubMenuContainer
