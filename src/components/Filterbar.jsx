export default function FilterBar({
  selectedBloodGroup,
  setSelectedBloodGroup,
  citySearch,
  setCitySearch,
  sortByAvailability,
  setSortByAvailability,
  bloodGroups,
}) {
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label className="filter-label">🔬 Blood Group</label>
        <select
          className="filter-select"
          value={selectedBloodGroup}
          onChange={(e) => setSelectedBloodGroup(e.target.value)}
        >
          <option value="All">All Groups</option>
          {bloodGroups.map((bg) => (
            <option key={bg} value={bg}>{bg}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">📍 Search by City</label>
        <input
          className="filter-input"
          type="text"
          placeholder="e.g. Gwenborough..."
          value={citySearch}
          onChange={(e) => setCitySearch(e.target.value)}
        />
      </div>

      <div className="filter-group toggle-group">
        <label className="filter-label">⚡ Sort by Availability</label>
        <button
          className={`toggle-btn ${sortByAvailability ? "active" : ""}`}
          onClick={() => setSortByAvailability((prev) => !prev)}
        >
          {sortByAvailability ? "ON" : "OFF"}
        </button>
      </div>
    </div>
  );
}