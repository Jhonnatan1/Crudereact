import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://6657b1b55c3617052645998a.mockapi.io/products/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('There was an error fetching the products!', error));
  }, []);

  const deleteProduct = (id) => {
    axios.delete(`https://6657b1b55c3617052645998a.mockapi.io/products/products/${id}`)
        //Atualiza o estado com um novo array com os produtos diferentes de id passado
      .then(() => setProducts(products.filter(product => product.id !== id)))
      .catch(error => console.error('There was an error deleting the product!', error));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Product List</h2>
      <Link to="/add" className="btn btn-primary mb-3">Add Product</Link>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Promotion</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.promotion}</td>
              <td>
                <Link to={`/edit/${product.id}`} className="btn btn-warning mr-2">Edit</Link>
                <button onClick={() => deleteProduct(product.id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
