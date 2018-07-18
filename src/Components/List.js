import React from 'react'
import uid from 'uid'



const List = ({ productsList }) => {
  return (
    <ul className="list">
      {productsList.map((products) =>
        <li key={uid(10)}>{products.title} <br />
          <span>Precio: {`${products.currency_id}-${products.price}`}</span>
          <button>Eliminar</button>
          <button>Editar</button>
        </li>
      )}
    </ul>
  )
}

export default List



 