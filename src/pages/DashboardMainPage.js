import React from 'react';
import "../DashboardMainPage.scss"
import { PieChart, Pie, Cell } from 'recharts';
import {ReactComponent as MaskIcon} from "../svgs/masks_black_24dp.svg";
import HumanVector from "../images/output-onlinepngtools.png"

function DashboardMainPage() {
    const data = [
        { name: 'Group A', value: 600 },
        { name: 'Group B', value: 150 },
        { name: 'Group C', value: 250 }
    ];
    const COLORS = ['#FF8E30', '#EA3221', '#4BC337'];
    return (
        <div className="dashboardMainPage">
            <div className="row1">
                <div className="cardsWrap">
               <h2>COVID-19 - Report</h2>
               <div className="cardsWrapInner">
                   <div className="card">
                       <div className="cardContent">
                           <h1>Active cases</h1>
                           <h2>1,097,292</h2>
                       </div>
                   </div>
                   <div className="card">
                       <div className="cardContent">
                           <h1>Active cases</h1>
                           <h2>1,097,292</h2>
                       </div>
                   </div>
                   <div className="card">
                       <div className="cardContent">
                           <h1>Active cases</h1>
                           <h2>1,097,292</h2>
                       </div>
                   </div>
                   <div className="card">
                       <div className="cardContent">
                           <h1>Active cases</h1>
                           <h2>1,097,292</h2>
                       </div>
                   </div>
               </div>
           </div>
            </div>
            <div className="row2">
                 <div className="card2">
                     <p>Total cases : 124,916</p>
                <PieChart width={800} height={400}>
                    <Pie
                        data={data}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                    >

                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
                     <div className="card2-sub">
                         <ul>
                            <span>🟢</span> <li>Recovered 50%</li>
                            <span>🔴</span> <li>Deaths 30%</li>
                            <span>🟠</span> <li>Active 20%</li>
                         </ul>
                     </div>
            </div>
                <div className="card3">
                   <div className="row3">
                       <div className="card4">
                           <div><MaskIcon/></div>
                          <p>Show that you care.
                          Wear.</p>
                       </div>
                   </div>
                    <div className="row3">
                        <div className="card5">
                            <p>Feeling a little under the weather ?
                            <span> Take Test</span>
                            </p>
                            <img src={HumanVector} alt="image"/>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default DashboardMainPage;
