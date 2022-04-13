import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <header><NavBar /></header>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/list" element={<ItemListContainer />} />
          <Route path="/detail/:productID" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryID" element={<ItemListContainer />} />
          <Route path="*" element={<h1 style={{textAlign: 'center'}}>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App