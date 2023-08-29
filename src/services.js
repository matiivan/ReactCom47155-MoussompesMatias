import React, { useState, useEffect } from 'react';

const products = [
  //camara de CCTV
  { id: "1", name: "Dahua 5px", price: 20000, category: "CamaraCCTV" },
  { id: "2", name: "hichoti 4px", price: 10000, category: "CamaraCCTV" },
  { id: "3", name: "Hikvision 6px", price: 40000, category: "CamaraCCTV" },
  //camaras IP
  { id: "4", name: "Camara IP XYZ", price: 30000, category: "CamarasIP" },
  { id: "5", name: "Camara IP ABC", price: 25000, category: "CamarasIP" },
  { id: "6", name: "Camara IP DEF", price: 28000, category: "CamarasIP" },
  //Accesorios
  { id: "7", name: "Accesorio Cable", price: 5000, category: "Accesorios" },
  { id: "8", name: "Accesorio Soporte", price: 8000, category: "Accesorios" },
  { id: "9", name: "Accesorio Fuente", price: 7000, category: "Accesorios" },
];



export const GetProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === id);

      if (product) {
        resolve(product);
      } else {
        reject("No se encontró el producto");
      }
    }, 2000);
  });
};

export const getProducts = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productsFiltered = category
        ? products.filter((product) => product.category === category)
        : products;
      resolve(productsFiltered);
    }, 2000);
  });
};

export default getProducts;