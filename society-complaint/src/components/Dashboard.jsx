import ComplaintCard from "./ComplaintCard";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Welcome to Green Valley Apartments</h1>

      <div className="actions">
        <button className="primary">Raise Complaint</button>
        <button>Track Status</button>
        <button className="danger">Emergency</button>
        <button>Announcements</button>
      </div>

      <h2>Recent Complaints</h2>

      <div className="cards">
        <ComplaintCard
          title="Water Leakage"
          date="10 Mar 2024"
          status="Pending"
        />
        <ComplaintCard
          title="Lift Not Working"
          date="08 Mar 2024"
          status="Resolved"
        />
        <ComplaintCard
          title="Street Light Broken"
          date="05 Mar 2024"
          status="In Progress"
        />
      </div>
    </div>
  );
}
