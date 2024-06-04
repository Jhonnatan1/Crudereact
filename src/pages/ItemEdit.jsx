import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditProduct = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [promotion, setPromotion] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://6657b1b55c3617052645998a.mockapi.io/products/products/${id}`)
      .then(response => {
        const product = response.data;
        setTitle(product.title);
        setPrice(product.price);
        setPromotion(product.promotion);
      })
      .catch(error => console.error('There was an error fetching the product!', error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedProduct = { title, price, promotion };

    axios.put(`https://6657b1b55c3617052645998a.mockapi.io/products/products/${id}`, updatedProduct)
      .then(() => {
        navigate('/');
      })
      .catch(error => console.error('There was an error updating the product!', error));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Promotion</label>
          <input
            type="text"
            className="form-control"
            value={promotion}
            onChange={(e) => setPromotion(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;
