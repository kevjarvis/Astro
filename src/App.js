import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "./context/CartContext";


const App = () => {
  return (
    <>
      <CartContextProvider>
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
      </CartContextProvider>
    </>
  )
}

export default App