import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { Link } from "react-router-dom";
import { getProducts } from '../../services';

const ItemList = ({ category }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getProducts(category)
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="container mt-5">
      <div className="row">
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <div className="card-deck">
            {items.map((item) => (
              <div key={item.id} className="card col-md-4 mb-4 hoverable">
                <Link to={`/item/${item.id}`}>
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Precio: ${item.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

ItemList.propTypes = {
  category: propTypes.string.isRequired,
};

export default ItemList;
