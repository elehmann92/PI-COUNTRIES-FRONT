import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";
import ActivityCreationForm from "./pages/ActivityCreationForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/country_details/:id" element={<CountryDetail/>} />
        <Route path="/activity_creation" element={<ActivityCreationForm/>} />
      </Routes>
    </div>
  );
}

export default App;
