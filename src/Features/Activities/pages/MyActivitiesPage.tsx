import "../style/MyActivitiesPage.css";

function MyActivitiesPage() {
  return (
    <section className="list-activities-content">
      <h2 className="list-activities-title">Mis Actividades</h2>
      <section className="list-activities-grid">
        <ul className="list-activities-card">
          <div className="title-activities-card">
            <h1>Title</h1>
          </div>
          <div className="line"></div>
          <li>
            <p>Description</p>
          </li>
          <li>
            <h1>Name</h1>
          </li>
        </ul>
        <ul className="list-activities-card">
          <div className="title-activities-card">
            <h1>Title</h1>
          </div>
          <div className="line"></div>
          <li>
            <p>Description</p>
          </li>
          <li>
            <h1>Name</h1>
          </li>
        </ul>
        <ul className="list-activities-card">
          <div className="title-activities-card">
            <h1>Title</h1>
          </div>
          <div className="line"></div>
          <li>
            <p>Description</p>
          </li>
          <li>
            <h1>Name</h1>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default MyActivitiesPage;
