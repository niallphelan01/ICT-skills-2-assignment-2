import React from 'react';
import SiteHeader from './components/siteHeader';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route,Switch} from 'react-router-dom';
import "./globals/fontawesome";
import HomePage from "./pages/homePage";
import PatientsPage from "./pages/patientsPage";
import WaitingRoomPage from "./pages/waitingRoomPage";
import VisitHistoryPage from "./pages/visitHistoryPage";
import SchedulingPage from "./pages/schedulingPage";
import SinglePatientPage from "./pages/singlePatientPage";

function App() {
  return (
      <>
       <BrowserRouter>
          <SiteHeader />
          <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/patients" component={PatientsPage} />
          <Route path="/waitingroom" component={WaitingRoomPage} />
          <Route path="/visithistory" component={VisitHistoryPage} />
          <Route path="/scheduling" component={SchedulingPage}/>
          <Route path="/singlePatientPage/:id" component={SinglePatientPage}/>
          </Switch>
       </BrowserRouter>
       </>
  );
}

export default App;

