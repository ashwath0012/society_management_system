export default function ComplaintCard({ title, date, status }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>Filed on: {date}</p>
      <span className={`status ${status.toLowerCase()}`}>
        {status}
      </span>
      <button>View Details</button>
    </div>
  );
}
