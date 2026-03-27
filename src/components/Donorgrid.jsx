import DonorCard from "./Donorcard";

function LoadingSpinner() {
  return (
    <div className="loading-wrapper">
      <div className="spinner">
        <div className="drop" />
      </div>
      <p className="loading-text">Finding donors near you...</p>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="empty-state">
      <div className="empty-icon">🔍</div>
      <h3>No donors found</h3>
      <p>Try adjusting your filters or search term.</p>
    </div>
  );
}

export default function DonorGrid({ donors, loading, requestStatus, onRequest }) {
  if (loading) return <LoadingSpinner />;
  if (donors.length === 0) return <EmptyState />;

  return (
    <div className="donor-grid">
      {donors.map((donor) => (
        <DonorCard
          key={donor.id}
          donor={donor}
          requested={!!requestStatus[donor.id]}
          onRequest={onRequest}
        />
      ))}
    </div>
  );
}