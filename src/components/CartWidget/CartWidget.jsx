
const CartWidget = () => {
return(
    <button className="btn btn-light position-relative"> <i className="bi bi-cart3"></i>
    
    
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    1
    <span className="visually-hidden">Camaras agregadas al carrito</span>
  </span>
    </button>)
}



export default CartWidget