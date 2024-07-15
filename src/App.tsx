import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SneakerPage from "./pages/SneakerPage/SneakerPage";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/sneaker/:sneakerId" element={<SneakerPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
