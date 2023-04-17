import React, { useState } from 'react';
import Navbar from '../containers/NavBar';
import Feed from '../containers/Feed';
import './styles.scss';

const Dashboard = () => {
  const [alerts, setAlerts] = useState([]);
  const [brokers, setBrokers] = useState([]);
  return (
    <div id='dashboard-page' class='pages'>
      <Navbar />
      <Feed alerts={alerts} brokers={brokers} />
    </div>
  );
};

export default Dashboard;
