import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../index.css";
import skills from "./skills";
import NotFound from "./404";
import Home from "./Home";
import HeaderComp from "../components/HeaderComp";

function App() {
  return (
    <div className="h-full m-2 lg:m-6">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" Component={Home}></Route> */}

          <Route Component={HeaderComp}>
            <Route path="/" Component={Home}></Route>
            <Route path="/skill" Component={skills}></Route>
            <Route path="/*" Component={NotFound}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
