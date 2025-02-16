import React , { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar"; 
import Header from "./components/header";
import Home from './components/dashboard/home/home';  
import Rooms from "./components/dashboard/rooms/rooms";
import Reports from "./components/dashboard/home/reports";
import Bookings from "./components/dashboard/bookings";
import Info from "./components/dashboard/info/info";
import useDataStore from "./services/data";
import Footer from "./components/footer";
import Complaints from "./components/dashboard/complaints";
import BookingCalendar from "./components/clientpage/sauna";

const App = () => {
  const { data, startFetching } = useDataStore();
  useEffect(() => {
    startFetching();
  }, [startFetching]);
  return (
    <Router>
      <Header />
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/admin" element={<Home />} />
          <Route path="/admin/rooms" element={<Rooms />} />
          <Route path="/admin/reports" element={<Reports/>} />
          <Route path="/admin/info" element={<Info />} />
          <Route path="/admin/bookings" element={<Bookings />} />
          <Route path="/admin/complaints" element={<Complaints />} />

          <Route path="/client/sauna" element={<BookingCalendar/>} />
          <Route path="/client/laundry" element={<span>Laundry</span>} />
          <Route path="/client/info" element={<span>Client Info</span>} />
          <Route path="/client/complaint" element={<span>Client Complaints</span>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
