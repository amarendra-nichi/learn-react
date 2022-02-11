import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-loader-spinner/dist/loader/css/CradleLoader.css";
import "../node_modules/react-loader-spinner/dist/loader/css/Plane.css";
import "../node_modules/react-loader-spinner/dist/loader/css/Triangle.css";
import Login from "./login/Login";
import Home from "./Home";
import CreateUser from "./users/CreateUser";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function App() {
  return (
    <div className="App">
      <>
      <div className="app-body">
        
        <Navbar />
        <main className="main">
        <div class="container-fluid">
        <div class="container-box mb-3">
        <Routes>
        
         <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-user" element={<CreateUser />} />
     
        </Routes>
      
        </div>
        </div>
        </main>
        </div>
    </>
    </div>
    // <Routes>
    // <Route render={({ location, history }) => (
    //     <>
    //         <SideNav
    //             onSelect={(selected) => {
    //                 const to = '/' + selected;
    //                 if (location.pathname !== to) {
    //                     history.push(to);
    //                 }
    //             }}
    //         >
    //             <SideNav.Toggle />
    //             <SideNav.Nav defaultSelected="home">
    //                 <NavItem eventKey="home">
    //                     <NavIcon>
    //                         <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
    //                     </NavIcon>
    //                     <NavText>
    //                         Home
    //                     </NavText>
    //                 </NavItem>
    //                 <NavItem eventKey="devices">
    //                     <NavIcon>
    //                         <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
    //                     </NavIcon>
    //                     <NavText>
    //                         Devices
    //                     </NavText>
    //                 </NavItem>
    //             </SideNav.Nav>
    //         </SideNav>
    //         <main>
    //         <Routes>
    //             <Route path="/" element={<Login />}  />
    //             <Route path="/home" component={props => <Home />} />
    //             <Route path="/devices" component={props => <Home />} />
    //             </Routes>
    //         </main>
    //     </>
    // )}
    // />
    // </Routes>
    
    // <div>
    //   <div className="App">
    //   {location.pathname !== "/" && <Sidebar />}
    //   </div>
      
    //   {/* <Link to={/Home}>home</Link> */}
    //     {/* <Link to="/home" className="mx-1">
    //       Name
    //     </Link>
    //     <Link to="/create-user">Form</Link> */}
    //   <div className="container">
    //     <Routes>
    //       <Route path="/" element={<Login />} />
    //       <Route path="/home" element={<Home />} />
    //       <Route path="/create-user" element={<CreateUser />} />
    //     </Routes>
    //     </div>
    // </div>
  );
}

export default App;
