import { useState, useEffect } from "react";
import ItemList from "../ItemsListContainer/ItemList";
import { getProducts } from "../../services"
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../IntemDetailContainer/ItemDetailContainer";

const ItemListContainer = () => {
    const { category } = useParams(); 
  
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      getProducts(category).then((response) => {
        setItems(response);
      });
    }, [category]);

   return <ItemList items={items} category={category} />
 }

export default ItemListContainer;
