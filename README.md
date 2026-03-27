# 🩸 Community Blood Donor Finder

A React-based web application that helps users **find and connect with blood donors in their community**. The app allows filtering by blood group, searching by city, and requesting help from available donors — making it a simple yet impactful tool for real-world use.

## 📌 Features

* 🔍 **Search by City** – Quickly find donors in a specific location
* 🩸 **Filter by Blood Group** – Select required blood type
* 📊 **Live Statistics** – View total donors and available donors
* ⚡ **Sort by Availability** – Prioritize donors who are ready to help
* 🙋 **Request Help** – Send requests to donors
* ⏳ **Loading & Error Handling** – Smooth user experience with feedback states
* 🎨 **Clean UI** – Simple and user-friendly interface

---

## 🛠️ Tech Stack

* **Frontend:** React.js (Functional Components & Hooks)
* **State Management:** Custom Hook (`useDonors`)
* **Styling:** CSS
* **Deployment:** Vercel

---

## 📂 Project Structure

```
src/
│── components/
│   ├── FilterBar.js
│   ├── SearchBar.js
│   ├── StatsBar.js
│   ├── DonorList.js
│   ├── Spinner.js
│
│── hooks/
│   ├── useDonors.js
│
│── App.js
│── App.css
│── index.js
```

---

## ⚙️ How It Works

The app uses a custom hook `useDonors` to manage:

* Donor data
* Filtering (blood group & city)
* Sorting by availability
* Request handling
* Loading & error states

### Flow:

1. User searches by city
2. Applies blood group filter
3. Views filtered donor list
4. Requests help from available donors

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/udayasri25bcs10741/React_1_Project.git
cd React_1_Project
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm start
```

App will run on:

```
http://localhost:3000
```

---

## 📊 Key Components

* **SearchBar** → Handles city input
* **FilterBar** → Filters by blood group & sorting
* **StatsBar** → Displays donor statistics
* **DonorList** → Renders donor cards
* **Spinner** → Loading state UI

---

## 📸 Screenshots

*Add screenshots here (recommended for portfolio use)*

---

## 🎯 Learning Outcomes

* Building scalable React applications using **custom hooks**
* Managing UI state efficiently
* Implementing **search, filter, and sorting logic**
* Handling **loading and error states**
* Creating reusable components

---

## 💡 Future Enhancements

* 📍 Add location-based services (GPS)
* 📱 Make it fully mobile-optimized
* 🔐 User authentication for donors
* ☁️ Backend integration (Firebase / Node.js API)
* 📞 Direct contact or messaging system

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create your feature branch
3. Commit your changes
4. Push to GitHub
5. Open a Pull Request

---

## 📜 License

This project is open-source and available under the MIT License.

---

## ❤️ Acknowledgement

> “Every drop counts. Be a donor. Save a life.”

---

## 📬 Contact

For feedback or collaboration, feel free to reach out!
