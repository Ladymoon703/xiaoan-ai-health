import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import Chat from "@/pages/Chat";
import Family from "@/pages/Family";
import Insights from "@/pages/Insights";
import Doctor from "@/pages/Doctor";
import Risks from "@/pages/Risks";
import Loop from "@/pages/Loop";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/risks" element={<Risks />} />
          <Route path="/loop" element={<Loop />} />
          <Route path="/family" element={<Family />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
