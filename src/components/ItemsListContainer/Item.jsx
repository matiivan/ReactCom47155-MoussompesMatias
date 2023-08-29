import React from 'react';

const Item = ({ item }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-text">${item.price}</p>
      </div>
    </div>
  );
};

export default Item;
