import { useState } from "react"
import DarkModeToggle from "./components/DarkModeToggle"
import ProductList from "./components/ProductList"
import Cart from "./components/Cart"

const products = [
  { id: 1, name: "Milk", category: "Dairy" },
  { id: 2, name: "Cheese", category: "Dairy" },
  { id: 3, name: "Apple", category: "Fruits" },
  { id: 4, name: "Banana", category: "Fruits" },
]

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState("All")

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category)

  function addToCart(product) {
    setCart([...cart, product])
  }

  return (
    <div style={{ padding: "20px", background: darkMode ? "#222" : "#fff", color: darkMode ? "#fff" : "#000" }}>
      <h1>Grocery Shopping App</h1>

      {/* Dark Mode Toggle */}
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Category Filter */}
      <div style={{ margin: "10px 0" }}>
        <label htmlFor="category">Filter by Category: </label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Dairy">Dairy</option>
          <option value="Fruits">Fruits</option>
        </select>
      </div>

      {/* Product List */}
      <ProductList products={filteredProducts} addToCart={addToCart} />

      {/* Cart */}
      <Cart cart={cart} />
    </div>
  )
}

export default App
