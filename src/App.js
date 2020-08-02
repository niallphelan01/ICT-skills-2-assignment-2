import React from 'react';
import SiteHeader from './components/siteHeader';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Accordion from 'react-bootstrap/Accordion';
import CardDeck from 'react-bootstrap/CardDeck';
import Table from 'react-bootstrap/Table'
import { BrowserRouter, Route,Switch} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./globals/fontawesome";
import HomePage from "./pages/homePage";
import PatientsPage from "./pages/patientsPage";
import WaitingRoomPage from "./pages/waitingRoomPage";
import VisitHistoryPage from "./pages/visitHistoryPage";
import SchedulingPage from "./pages/schedulingPage";

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
          </Switch>
       </BrowserRouter>
       </>
  );
}

export default App;

