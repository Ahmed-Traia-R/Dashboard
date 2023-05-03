import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './SideBar';
import Topbar from './Topbar';
import Home from '../pages/Home';
import FeaturedInfo from './FeaturedInfo';
import Product from '../pages/Product';
import User from '../pages/User';
import Chart from './Chart';
// import Transactions from '../pages/Transactions';

function PageWithComponents(): JSX.Element {
  const [open, setOpen] = useState(false);
  const openProduct = () => {
    setOpen(!open);
  };
  const [home, setHome] = useState(false);
  const homeDashboard = () => {
    setHome(!home);
  };
  const [user, setUser] = useState(false);
  const userDashboard = () => {
    setUser(!user);
  };
  const [analytics, setAnalytics] = useState(false);
  const analyticsDashboard = () => {
    setAnalytics(!analytics);
  };
  const [transcation, setTranscation] = useState(false);
  const openTranscation = () => {
    setTranscation(!transcation);
  };
  
  return (
    <>
      <Topbar />
      <div className="container-fluid">
        <div className="row">
          <Sidebar
            openProduct={openProduct}
            homeDashboard={homeDashboard}
            userDashboard={userDashboard}
            analyticsDashboard={analyticsDashboard}
            openTranscation={openTranscation}
          />
          <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {open ? <Product /> : null}
            {home ? <Home /> : null}
            {user ? <User /> : null}
            {analytics ? <Chart/>:null}
            {transcation ? <Transactions/>:null}
          </div>
        </div>
      </div>
    </>
  );
}

export default PageWithComponents;

