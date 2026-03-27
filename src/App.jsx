import { useState, useEffect } from "react";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import DonorGrid from "./components/DonorGrid";
import StatsBar from "./components/StatsBar";
import "./styles.css";

const BLOOD_GROUPS = ["A+", "B+", "O+", "AB+", "A−", "B−", "O−", "AB−"];
const AVAILABILITIES = [true, true, false, true, true, false, true, false, true, true];

const RAW_USERS = [
  { id: 1, name: "Leanne Graham", address: { city: "Gwenborough" } },
  { id: 2, name: "Ervin Howell", address: { city: "Wisokyburgh" } },
  { id: 3, name: "Clementine Bauch", address: { city: "McKenziehaven" } },
  { id: 4, name: "Patricia Lebsack", address: { city: "South Elvis" } },
  { id: 5, name: "Chelsey Dietrich", address: { city: "Roscoeview" } },
  { id: 6, name: "Mrs. Dennis Schulist", address: { city: "South Christy" } },
  { id: 7, name: "Kurtis Weissnat", address: { city: "Howemouth" } },
  { id: 8, name: "Nicholas Runolfsdottir V", address: { city: "Aliyaview" } },
  { id: 9, name: "Glenna Reichert", address: { city: "Bartholomebury" } },
  { id: 10, name: "Clementina DuBuque", address: { city: "Lebsackbury" } },
];

function mapDonors(users) {
  return users.map((u, i) => ({
    id: u.id,
    name: u.name,
    city: u.address.city,
    bloodGroup: BLOOD_GROUPS[i % BLOOD_GROUPS.length],
    available: AVAILABILITIES[i],
  }));
}

export default function App() {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("All");
  const [citySearch, setCitySearch] = useState("");
  const [sortByAvailability, setSortByAvailability] = useState(false);
  const [requestStatus, setRequestStatus] = useState({});

  useEffect(() => {
    // Simulate API fetch with local data
    setTimeout(() => {
      setDonors(mapDonors(RAW_USERS));
      setLoading(false);
    }, 1200);
  }, []);

  const handleRequest = (id) => {
    setRequestStatus((prev) => ({ ...prev, [id]: true }));
  };

  let filtered = donors.filter((d) => {
    const bgMatch = selectedBloodGroup === "All" || d.bloodGroup === selectedBloodGroup;
    const cityMatch = d.city.toLowerCase().includes(citySearch.toLowerCase());
    return bgMatch && cityMatch;
  });

  if (sortByAvailability) {
    filtered = [...filtered].sort((a, b) => b.available - a.available);
  }

  const availableCount = filtered.filter((d) => d.available).length;

  return (
    <div className="app">
      <div className="bg-pulse" />
      <Header />
      <StatsBar total={filtered.length} available={availableCount} />
      <FilterBar
        selectedBloodGroup={selectedBloodGroup}
        setSelectedBloodGroup={setSelectedBloodGroup}
        citySearch={citySearch}
        setCitySearch={setCitySearch}
        sortByAvailability={sortByAvailability}
        setSortByAvailability={setSortByAvailability}
        bloodGroups={BLOOD_GROUPS}
      />
      <DonorGrid
        donors={filtered}
        loading={loading}
        requestStatus={requestStatus}
        onRequest={handleRequest}
      />
    </div>
  );
}