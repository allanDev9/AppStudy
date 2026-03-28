import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import ActivitiesPages from "./Features/Activities/pages/ActivitiesPages";
import ActivitiesListPage from "./Features/Activities/pages/ActivitiesListPage";
import ActivitiesStatusPage from "./Features/Activities/pages/ActivitiesStatusPage";
import MyActivitiesPage from "./Features/Activities/pages/MyActivitiesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/actividades" replace />} />
      <Route path="/actividades" element={<ActivitiesPages />}>
        <Route index element={<ActivitiesListPage />} />
        <Route path="mis-actividades" element={<MyActivitiesPage />} />
        <Route path="estado" element={<ActivitiesStatusPage />} />
      </Route>
    </Routes>
  );
}

export default App;
