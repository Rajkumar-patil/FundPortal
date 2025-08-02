import React, { useEffect, useState } from "react";
import styles from "./Leaderboard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import axios from "axios";

const Leaderboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/leaderboard") // backend URL
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching leaderboard:", err));
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.pageWrapper}>
        <div className={styles.boardWrapper}>
          <h2 className={styles.heading}>🏆 Top Fundraisers</h2>
          <div className="table-responsive">
            <table className="table table-hover table-borderless text-white">
              <thead>
                <tr className={styles.tableHeader}>
                  <th>#</th>
                  <th>Name</th>
                  <th>Referral Code</th>
                  <th>Donations Raised (₹)</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user, index) => (
                  <tr key={index} className={styles.tableRow}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.referral}</td>
                    <td>₹{user.donations}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
