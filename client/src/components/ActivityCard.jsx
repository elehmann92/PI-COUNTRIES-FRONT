import React from "react";
import styles from "../styles/activityCard.module.css";

function ActivityCard({ activity }) {
  return (
    <div className={styles.activityCard}>
      <h3>{activity.name}</h3>
      <h5>Difficulty: {activity.difficulty}</h5>
      <h5>
        Duration: {activity.duration}{" "}
        {activity.duration <= 1 ? "hour" : "hours"}
      </h5>
      <h5>Season: {activity.season}</h5>
    </div>
  );
}

export default ActivityCard;
