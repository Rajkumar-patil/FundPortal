import styles from "./Dashbord.module.css";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [userData, setUserData] = useState({
    name: "",
    referralCode: "",
    donations: 0,
  });

  useEffect(() => {
    fetch("https://fundportal-1.onrender.com")
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((err) => console.error("Error fetching user data:", err));
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>Welcome, {userData.name}</h2>
      </div>

      <div className={styles.dashboardWrapper}>
        <div className={styles.stats}>
          <div className={styles.card}>
            <h4>Referral Code</h4>
            <p>{userData.referralCode}</p>
          </div>
          <div className={styles.card}>
            <h4>Total Donations</h4>
            <p>₹{userData.donations}</p>
          </div>
        </div>

        <div className={styles.rewardsSection}>
          <h3>Rewards & Unlockables</h3>
          <ul>
            <li>🎉 Raised ₹1,000 – Bronze Badge</li>
            <li>🏅 Raised ₹5,000 – Silver Medal</li>
            <li>🚀 Raised ₹10,000 – Gold Trophy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
