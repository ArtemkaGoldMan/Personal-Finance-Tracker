import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function App() {
  return (
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<h1>Dashboard</h1>}/>
            <Route path="/auth" element={<h1>Sign In</h1>}/>
          </Routes>
        </div>
      </Router>
  );
}