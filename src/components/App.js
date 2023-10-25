import "../App.css";
import AllTheBooks from "./AllTheBooks";
import MyFooter from "./MyFooter";
import MyNav from "./MyNav";
import Welcome from "./Welcome";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;
