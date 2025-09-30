import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rooms from "./pages/Rooms";
import RoomDetail from "./pages/RoomDetail";
import PaymentSuccess from "./pages/PaymentSuccess";
import BookingSuccess from "./pages/BookingSuccess";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Restaurant from "./pages/Restaurant";
import Menu from "./pages/Menu";
import BookingStatus from "./pages/BookingStatus";

// Admin imports
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
import AdminRooms from "./admin/pages/Rooms";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ---------- User Routes (with Navbar + Footer) ---------- */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/rooms-cottage" element={<Rooms />} />
                <Route path="/rooms-cottage/:slug" element={<RoomDetail />} />
                <Route path="/restaurant" element={<Restaurant />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/bookingstatus" element={<BookingStatus />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />
                <Route path="/booking-success/:bookingId" element={<BookingSuccess />} />
              </Routes>
              <Footer />
            </>
          }
        />

        {/* ---------- Admin Routes (no Navbar/Footer) ---------- */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="rooms" element={<AdminRooms />} />
          {/* <Route path="bookings" element={<AdminBookings />} /> */}
          {/* Later we’ll add: <Route path="rooms" element={<AdminRooms />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
