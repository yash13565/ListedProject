import React from 'react'
import LeftSection from '../../section/LeftSection/LeftSection'
import style from "./Dashboard.module.css"
import Rightsection from '../../section/Rightsection/Rightsection'
function Dashboard() {
  return (
    <div className={style.section}> 
      <div className={style.left}><LeftSection/></div>
      <div className={style.right}><Rightsection/></div>
    </div>
  )
}

export default Dashboard

