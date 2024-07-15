import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SneakerPage from "./pages/SneakerPage/SneakerPage";
import NavigationBarComponent from "./components/NavigationBarComponent/NavigationBarComponent";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavigationBarComponent />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/sneaker/:sneakerId" element={<SneakerPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
