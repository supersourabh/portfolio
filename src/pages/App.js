import { BrowserRouter, Route, Routes } from "react-router-dom";
import skills from "./skills";
import NotFound from "./404";
import Home from "./Home";
import HeaderComp from "../components/HeaderComp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" Component={Home}></Route> */}

        <Route Component={HeaderComp}>
          <Route path="/" Component={Home}></Route>
          <Route path="/skill" Component={skills}></Route>
        </Route>
        <Route path="/*" Component={NotFound}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
