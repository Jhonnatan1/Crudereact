import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemList from "./pages/ItemList";
import AddProduct from "./pages/ItemAdd";
import EditProduct from "./pages/ItemEdit";
function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route index element={<ItemList />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="edit/:id" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
