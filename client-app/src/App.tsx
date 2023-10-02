import "./App.css";
import { useEffect, useState } from "react";
import { request } from './services/ApiClient'

function App() {
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchActivitiesApi = async () => {
    const response = await request.get(`Seed/GetSeedData`);
    return response.data;
  };

  const fetchActivities = () => {
    fetchActivitiesApi().then((res) => {
      setIsLoading(false);
      setActivities(res);
    });
  };

  useEffect(() => {
    fetchActivities();

    return () => {
      setActivities([]);
    };
  }, []);

  // useEffect(() => {
  //    axios.get('https://localhost:7221/api/Seed/GetSeedData') // Port number
  //    .then(response => {
  //       setActivities(response.data)
  //       console.log(response)
  //    })
  // }, [])

  return (
    <div>
      <h1>Reactivities</h1>
      <ul>
        {activities.map((activity : any) => (
          <li key={activity.id}>{activity.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
