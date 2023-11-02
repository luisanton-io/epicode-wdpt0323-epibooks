import { useState } from "react";
import "../App.css";
import AllTheBooks from "./AllTheBooks";
import MyFooter from "./MyFooter";
import MyNav from "./MyNav";
import Welcome from "./Welcome";

function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <MyNav query={query} setQuery={setQuery} />
      <Welcome />
      <AllTheBooks query={query} />
      <MyFooter />
    </>
  );
}

export default App;
