import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductLists from '../../components/products/ProductLists'

import axios from 'axios'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

export default function Product() {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    getProducts()
  }, [])

  async function getProducts() {
    axios
      .get(`http://localhost:3030/products`)
      .then((res) => setProducts(res.data))
  }

  function deleteProduct(product) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are going to delete this product.',
      showCancelButton: true,
      cancelButtonText: 'No',
      confirmButtonText: 'Yes',
      type: 'warning',
    }).then((res) => {
      if (res.value) {
        axios
          .delete(`http://localhost:3030/products/${product.id}`)
          .then(() => {
            axios
              .get(`http://localhost:3030/products`)
              .then((res) => setProducts(res.data))
          })
      }
    })
  }

  return (
    <div>
      <Header />
      <div className="container-fluid">
        <h1 className="text-center">All products</h1>
        <ProductLists products={products} onDeleteProduct={deleteProduct} />
      </div>
      <Footer company="bbL" email="chestprime@gmail.com" />
    </div>
  )
}
