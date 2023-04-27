import React from "react";
import style from "./Middle.module.css";
import Graph from "../../../Atoms/Graph";
import downarrow from "../../../Assests/downarrow.png";
import { GoPrimitiveDot } from "react-icons/go";

function Middle() {
  const dataArr = [
    { data: "Guest", color: "#E9A0A0" },
    { data: "User", color: "#9BDD7C" },
  ];
  return (
    <div className={style.midbox}>
      <div className={style.parent}>
        <div className={style.firstLine}>
          {" "}
          <p className={style.para}>Activities </p>
          <p className={style.seeAll}>
            May - June 2021 <img src={downarrow} />
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            flex: "1",
            gap: "1.5rem",
          }}
        >
          {dataArr.map((item, i) => {
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: ".5rem",
                }}
              >
                <span style={{ color: item.color }}>
                  <GoPrimitiveDot />
                </span>
                <span className={style.data}>{item.data}</span>
              </div>
            );
          })}
        </div>
      </div>

     <Graph/>
    </div>
  );
}

export default Middle;
