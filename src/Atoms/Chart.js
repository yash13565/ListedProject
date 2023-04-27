import {Chart as Chartjs,Tooltip,Title,ArcElement,Legend} from 'chart.js'
import {Pie} from 'react-chartjs-2'
Chartjs.register(
  Tooltip,Title,ArcElement,Legend
);
const data = {
  datasets: [{
      data: [14,31,55],
      backgroundColor: [
        '#EE8484',
        '#F6DC7D',
        '#98D89E',
    ],
  },
],

};
export default function PieChart() {
  
  return (
    <div style={{width:'145.94px',height:'145.94px'}}>
     <Pie data={data}/>
    </div>
  );
}