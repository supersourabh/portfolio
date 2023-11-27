import { BrowserRouter, Route, Routes } from "react-router-dom/dist";
import skills from "./skills";

function App() {
  return (
    <BrowserRouter>
      <div>Hello world</div>
      <Routes>

        <Route path="/a" component={skills} ></Route>
      </Routes>
    </BrowserRouter>
  );

}
export default App;
