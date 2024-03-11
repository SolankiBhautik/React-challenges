import { useEffect, useState } from 'react'
import ProductList from './component/ProductList'
import './App.css'



function App() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const getproducts = async () => {
      try {
      const response = await fetch('/products.json')
      const data = await response.json()
      setProducts(data)
      } catch (error) {
        console.log("error while getting the data fore a products ",error)
      }
    }

    getproducts()
  }, [])


  function selectfilter(e){
    setFilter(e.target.value)
  }

  useEffect(() => {
    if (filter === '') {
      setFilteredProducts(products); // If no filter, show all products
    } else {
      const filtered = products.filter((product) => product.category === filter);
      setFilteredProducts(filtered);
    }
  }, [filter, products]);


  return (
    <>
      <div className='box'>
        <h1>filter</h1>
        <select  
          onChange={selectfilter}
          className='filter'>
          <option value="">Select</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
        </select>
      </div>
      <ProductList products={filteredProducts}/> 
    </>
  )
}

export default App
