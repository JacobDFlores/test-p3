import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Router>
      <div>
        {/* display searchbar */}
        <SearchBar />
      </div>
    </Router>
  );
}

export default App;
