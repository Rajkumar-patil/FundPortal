import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginSignup from "./components/LoginSignup";
import Dashbord from "./components/Dashbord";
import Leaderboard from "./components/Leaderboard";
import Contact from "./components/ContactUs";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/user")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching user data:", err);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSignup />} />

        <Route
          path="/dashboard"
          element={
            <>
              <Navbar />
              {userData && <Dashbord intern={userData} />}
            </>
          }
        />

        <Route
          path="/leaderboard"
          element={
            <>
              <Navbar />
              <Leaderboard />
            </>
          }
        />
        <Route
          path="/ContactUS"
          element={
            <>
              <Navbar />
              <Contact />
            </>
          }
        />
        <Route path="/LoginSignup" element={<LoginSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
