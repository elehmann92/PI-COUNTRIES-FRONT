import React from "react";
import ActivityCard from "./ActivityCard";
import styles from '../styles/activityCards.module.css'

function ActivityCards({ activities }) {
  return (
    <div className={styles.activityCardContainer}>
      {activities.map((activity) => (
        <ActivityCard key={activity.name} activity={activity} />
      ))}
    </div>
  );
}

export default ActivityCards;
