import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import ItemListContainer from "./components/ItemContent/ItemListContainer";
import ItemDetailContainer from "./components/IntemDetailContainer/ItemDetailContainer";


function App() {

  return (
    <div>
      <NavBar />



      <hr />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />


      </Routes>



    </div>
  );
}

export default App;
