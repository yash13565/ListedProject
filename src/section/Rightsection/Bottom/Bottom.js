import React from "react";
import style from "./Bottom.module.css";
import arrow from '../../../Assests/arrow.png'
import downarrow from "../../../Assests/downarrow.png";
import PieChart from "../../../Atoms/Chart";
import { GoPrimitiveDot } from "react-icons/go";

function Bottom() {
  const infoArr = [
    {
      schedule: "Meeting with suppliers from Kuta Bali",
      time: "14.00-15.00",
      location: "at Sunset Road, Kuta, Bali",
      color: "#9BDD7C",
    },
    {
      schedule: "Check operation at Giga Factory 1 ",
      time: "18.00-20.00",
      location: "at Central Jakarta",
      color: "#6972C3",
    },
  ];
  const dataArr = [
    { data: "Basic Tees", color: "#98D89E", percentage: 55 },
    { data: "Custom Short Pants", color: "#F6DC7D", percentage: 31 },
    { data: "Super Hoodies", color: "#EE8484", percentage: 14 },
  ];
  return (
    <div className={style.mainbox}>
      <div className={style.box1}>
        <div className={style.firstLine}>
          {" "}
          <p className={style.para}>Top Products </p>
          <p className={style.seeAll}>
            May - June 2021 <img src={downarrow} />
          </p>
        </div>
        <div className={style.charts}>
          <PieChart />
          <div className={style.chart}>
            {dataArr.map((item,i) => {
              return (
                <div key={i} className={style.details}>
                  <span style={{ color: item.color }}>
                    <GoPrimitiveDot />
                  </span>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent:"flex-start"
                    }}
                  >
                    <span className={style.data}>{item.data}</span>
                    <span className={style.percentage}>{item.percentage}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={style.box2}>
        <div className={style.firstLine}>
          {" "}
          <p className={style.para}>Today’s schedule </p>
          <p className={style.seeAll}>
            See All <img src={arrow} />
          </p>
        </div>
        <div className={style.datas}>
          {infoArr.map((item, i) => {
            return (
              <div
                className={style.data}
                style={{ borderLeft: `5px solid ${item.color}` }}
                key={i}
              >
                <span className={style.schedule}>{item.schedule}</span>
                <span className={style.time}>{item.time}</span>
                <span className={style.location}>{item.location}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Bottom;
