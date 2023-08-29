import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetProduct } from "../../services";
import { Link } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    GetProduct(id)
      .then((response) => {
        setItem(response);
      })
      .catch((error) => {
        console.error(error);
        setItem(null); // Set item to null in case of an error
      });
  }, [id]);

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        {item ? (
          <div className="card col-md-6">
            <img
              src={item.image}
              className="card-img-top"
              alt={item.name}
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text">${item.price}</p>
              <Link to="/">
                <button className="btn btn-primary">Volver</button>
              </Link>
            </div>
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
