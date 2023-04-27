import React from "react";
import { FiPieChart } from "react-icons/fi";
import { BsTagsFill } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { TbCalendarStats } from "react-icons/tb";
import style from "./LeftSection.module.css";
function LeftSection() {
  const leftArr = [
    { navName: "Dashboard", navIcon: <FiPieChart /> },
    { navName: "Transaction", navIcon: <BsTagsFill /> },
    { navName: "Schedules", navIcon: <TbCalendarStats /> },
    { navName: "Users", navIcon: <BiUserCircle /> },
    { navName: "Settings", navIcon: <AiOutlineSetting /> },
  ];
  const leftHelp = ["Help", "Contact Us"];
  return (
    <div className={style.nav}>
      <b>Board.</b>
      <div className={style.content}>
        {leftArr.map((user) => {
          return (
           
              <div key={user.navName} className={style.icons}>
                {user.navIcon}
                {user.navName}
              </div>
         
          );
        })}
      </div>
      <div className={style.contact}>
        {leftHelp.map((item) => {
          return (
          <div key={item}>
            <span>{item}</span></div>
          )
        })}
      </div>
    </div>
  );
}

export default LeftSection;
