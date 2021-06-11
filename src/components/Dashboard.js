import React from 'react';
import {Route,Switch} from "react-router-dom";
import DashboardMainPage from "../pages/DashboardMainPage";
import PatientRegister from "../pages/PatientRegister";
import Navbar from "./Navbar";
import "../Dashboard.scss"


function Dashboard() {
    return (
            <div className="App">
                {/*<div className="row">*/}
                {/*    <div className="col-lg-1">*/}
                <div className="row">
                <div className="colNavbar">
                 <Navbar/>
                    {/*</div>*/}
                </div>
                    {/*<div className="col-lg-11 ">*/}
                <div className="colDashboard">

                <Switch>
                    <Route exact path="/dashboard">
                        <DashboardMainPage/>
                    </Route>
                    <Route path="/dashboard/patientRegister">
                        <PatientRegister/>
                    </Route>
            </Switch>
                </div>
                </div>
                {/*    </div>*/}
                {/*</div>*/}
            </div>
    );
}

export default Dashboard;
