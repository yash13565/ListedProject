import React from "react";
import style from "./Top.module.css";
import {CiSearch} from "react-icons/ci"
import like from "../../../Assests/like.png";
import revenue from "../../../Assests/revenue.png";
import tag from "../../../Assests/tag.png";
import Users from "../../../Assests/users.png";
import User from "../../../Assests/user.png";
import bell from "../../../Assests/bell.png"
function Top() {
  const Details = [
    {
      Total: "Total Revenues",
      src: revenue,
      color: " #DDEFE0",
      size: "$2,129,430",
    },
    { Total: "Total Transactions", color: " #F4ECDD", size: "1,520", src: tag },
    { Total: "Total Likes", color: " #EFDADA", size: "9,721", src: like },
    { Total: "Total Users", color: "#DEE0EF", size: "892", src: Users },
  ];
  return (
    <>
      <div className={style.parent}>
        <p className={style.heading}>Dashboard</p>
        <div className={style.rightside}>
          <input placeholder="Search..." />
          <button className={style.searchicon}><CiSearch/></button>
          <img src={bell} className={style.img} alt='bell.jpeg'/>
          <img src={User} className={style.img} alt='user.jpeg' />
        </div>
      </div>
      <div className={style.cards}>
        {Details.map((item, i) => {
          return (
            <div
              className={style.card}
              key={i}
              style={{
                background: item.color,
              }}
            >
              <img src={item.src} alt='item.jpeg'/>
              <div className={style.mainPara}>
              <p className={style.para}>{item.Total}</p>
              <p className={style.paraSize}>{item.size}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Top;
