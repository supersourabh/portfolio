import { BrowserRouter, Route, Routes } from "react-router-dom"
import skills from "./skills";
import NotFound from "./404";

function App() {
  return (
    <BrowserRouter>
      <div>Hello world</div>
      <Routes>
        <Route path="/skill" Component={skills} ></Route>
        <Route path="/*" Component={NotFound} ></Route>
      </Routes>
    </BrowserRouter>
  );

}
export default App;
