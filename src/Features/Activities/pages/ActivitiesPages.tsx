import "../style/ActivitiesPage.css";
import { NavLink, Outlet } from "react-router-dom";

function ActivitiesPages() {
  return (
    <section className="container-activities">
      <div className="card-activities">
        <h1 className="heading-activities">ActivitiesPages</h1>
        <ul className="menu-activities">
          <li className="menu-activities-entry">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "menu-activities-item menu-activities-item--active"
                  : "menu-activities-item"
              }
              to="/actividades"
              end
            >
              Actividades
            </NavLink>
          </li>
          <li className="menu-activities-entry">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "menu-activities-item menu-activities-item--active"
                  : "menu-activities-item"
              }
              to="/actividades/mis-actividades"
            >
              Mis Actividades
            </NavLink>
          </li>
          <li className="menu-activities-entry">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "menu-activities-item menu-activities-item--active"
                  : "menu-activities-item"
              }
              to="/actividades/estado"
            >
              Estado
            </NavLink>
          </li>
        </ul>
        <div className="list-activities">
          <Outlet />
        </div>
      </div>
    </section>
  );
}
export default ActivitiesPages;
