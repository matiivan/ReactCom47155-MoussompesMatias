import React from "react";
import PropTypes from "prop-types";

const ItemDetail = ({ item }) => {
  if (!item) return <h3>Producto no encontrado</h3>

  return (
    <div>
      <h1>{item.name}</h1>
      <p>${item.price}</p>
      <p>{item.category}</p>

      <button>agregar al carrito</button>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
};

export default ItemDetail;
