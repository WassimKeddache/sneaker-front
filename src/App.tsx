import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SneakerPage from "./pages/SneakerPage/SneakerPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/sneaker/:sneakerId" element={<SneakerPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
