import React,{useEffect,useState} from 'react';
import "../DashboardMainPage.scss"
import { PieChart, Pie, Cell } from 'recharts';
import {ReactComponent as MaskIcon} from "../svgs/masks_black_24dp.svg";
import HumanVector from "../images/output-onlinepngtools.png";
import CovidStatsService from "../services/CovidStatsService"

const COLORS=['#4BC337', '#FFBB28'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent,index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
        <text x={x} y={y} fill="white" textAnchor={x > 150 ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};


function DashboardMainPage() {
    const [activeCase,setActiveCase]=useState(5)
    const [totalCase,setTotalCase]=useState(13)
    const[turkeyTotalCase,setTurkeyTotalCase]=useState("")
    const[turkeyActiveCase,setTurkeyActiveCase]=useState("")
    const[turkeyRecoveredCase,setTurkeyRecoveredCase]=useState("")
    const[turkeyDeathCase,setTurkeyDeathCase]=useState("")
    const[currentDate,setCurrentDate]=useState("dd/mm/yy")

    useEffect(()=>{

       let covidStatsService=new CovidStatsService();
          covidStatsService
           .getActiveCase().then((result)=>{
               setActiveCase(result.data)

           })

          covidStatsService
           .getTotalCase().then((result)=>{
               setTotalCase(result.data)

           })
          covidStatsService
            .getTurkeyCase().then((result)=>{
            setTurkeyTotalCase(result.data.Countries[177].TotalConfirmed)
            setTurkeyActiveCase(result.data.Countries[177].NewConfirmed)
            setTurkeyRecoveredCase(result.data.Countries[177].NewRecovered)
            setTurkeyDeathCase(result.data.Countries[177].NewDeaths)
        });

        let currentDateService=new Date();
        currentDateService=currentDateService.getDate()+"/"+(currentDateService.getMonth()+1)+"/"+currentDateService.getFullYear();
        setCurrentDate(currentDateService)

    },[])
    const data=[
        {name:"Recovered",value:totalCase-activeCase},
        {name:"Active",value:activeCase}
    ]
    return (
        <div className="dashboardMainPage">
            <div className="row1">
                <div className="cardsWrap">
                    <h2>COVID19 - Turkey Daily Report</h2>
               <div className="cardsWrapInner">

                   <div className="card total">
                       <div className="cardContent">
                           <h1>Total Confirmed</h1>
                           <h2>{turkeyTotalCase.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
                       </div>
                   </div>
                   <div className="card active">
                       <div className="cardContent">
                           <h1>New Confirmed</h1>
                           <h2>{turkeyActiveCase.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
                       </div>
                   </div>
                   <div className="card recovered">
                       <div className="cardContent">
                           <h1>New Recovered</h1>
                           <h2>{turkeyRecoveredCase.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
                       </div>
                   </div>
                   <div className="card deaths">
                       <div className="cardContent">
                           <h1>New Deaths</h1>
                           <h2>{turkeyDeathCase.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
                       </div>
                   </div>
               </div>
           </div>
            </div>
            <div className="row2">

                 <div className="card2">

                        <div className="row4">
                            <div className="card6">
                                <h3>COVID19 Report of Hospital</h3>
                                <PieChart width={300} height={300}>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={renderCustomizedLabel}
                                        outerRadius={110}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >

                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </div>
                        </div>
                        <div className="row4">
                            <div className="card7">
                                <h3>Date :{currentDate}</h3>
                                <ul>
                                    <li>Total case: {totalCase}</li>
                                    <li><div className="box green"/>Recovered: {totalCase-activeCase}</li>
                                    <li><div className="box orange"/>Active cases: {activeCase}</li>
                                </ul>
                            </div>
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
                            <p>Feeling a little under the weather ?<br/>
                                <span> Take Test</span>
                            </p>
                            <img src={HumanVector} alt="Vector of human"/>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default DashboardMainPage;
