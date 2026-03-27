export default function StatsBar({ total, available }) {
  return (
    <div className="stats-bar">
      <div className="stat-pill">
        <span className="stat-num">{total}</span>
        <span className="stat-label">Total Donors</span>
      </div>
      <div className="stat-divider" />
      <div className="stat-pill available">
        <span className="stat-num">{available}</span>
        <span className="stat-label">Available Now</span>
      </div>
    </div>
  );
}