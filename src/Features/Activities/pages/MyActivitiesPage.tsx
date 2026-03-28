import "../style/MyActivitiesPage.css";
import { getActivities } from "../services/Activities.service.js";
import { useEffect, useState } from "react";
import { type Activity } from "../types/Activity.type.js";

function MyActivitiesPage() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const data = await getActivities();
        setActivities(data);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error("An unknown error occurred"));
        }
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  if (loading) {
    return <p>Loading activities...</p>;
  }

  if (error) {
    return <p>Error loading activities: {error.message}</p>;
  }

  if (activities.length === 0) {
    return <p>No activities found.</p>;
  }

  return (
    <section className="list-activities-content">
      <h2 className="list-activities-title">Mis Actividades</h2>
      <section className="list-activities-grid">
        {activities.map((activity) => (
          <ul className="list-activities-card">
            <div className="title-activities-card" key={activity.id}>
              <h1>{activity.name}</h1>
              <p>{activity.description}</p>
            </div>
          </ul>
        ))}
      </section>
    </section>
  );
}

export default MyActivitiesPage;
