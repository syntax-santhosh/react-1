export default function DonorCard({ donor, requested, onRequest }) {
  return (
    <div className={`donor-card ${!donor.available ? "unavailable" : ""}`}>
      <div className="card-top">
        <div className="blood-badge">{donor.bloodGroup}</div>
        <span className={`availability-chip ${donor.available ? "avail" : "unavail"}`}>
          {donor.available ? "● Available" : "○ Unavailable"}
        </span>
      </div>

      <div className="donor-avatar">
        {donor.name.charAt(0).toUpperCase()}
      </div>

      <h3 className="donor-name">{donor.name}</h3>
      <p className="donor-city">📍 {donor.city}</p>

      <button
        className={`request-btn ${requested ? "sent" : ""}`}
        onClick={() => !requested && donor.available && onRequest(donor.id)}
        disabled={requested || !donor.available}
      >
        {requested ? "Request Sent ✅" : donor.available ? "Request Help" : "Unavailable"}
      </button>
    </div>
  );
}