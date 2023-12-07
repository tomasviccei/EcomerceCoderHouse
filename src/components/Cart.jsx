import { Container, Form, Table } from "react-bootstrap";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import "./css/ItemListCont.css";

const initialValues = {
  name: "",
  phone: "",
  email: "",
};

export const Cart = () => {
  const { clear, items, onRemove } = useContext(CartContext);

  const [buyer, setBuyer] = useState(initialValues);
  const total = items.reduce(
    (acumulador, valorActual) =>
      acumulador + valorActual.quantity * valorActual.price,
    0
  );

  const handleChange = (event) => {
    setBuyer((buyer) => {
      return {
        ...buyer,
        [event.target.name]: event.target.value,
      };
    });
  };

  const sendOrder = () => {
    const order = {
      buyer,
      items,
      total,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        alert("Su orden: " + id + " ha sido completada!");
        setBuyer(initialValues);
        clear();
      }
    });
  };

  const navigate = useNavigate(); 
  if (!items.length) {
    return (
      <Container className="nocart-container">

        <h2 className="titulo-seccion">Ups...</h2>
        <span>Parece que no hay productos en el carrito</span>
        <button className="btn-volver" onClick={() => navigate("/")}>Ir a la home</button>
      </Container>
    );
  } 
 
  return (
    <Container className="cart-container">
      <h1>Carrito</h1>

      <Table striped="columns">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>$ {item.price}</td>
              <td>
                <img src={item.pictureUrl} width={60} />
              </td>
              <td onClick={() => onRemove(item.id)}>X</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total: {total}</td>
          </tr>
        </tfoot>
      </Table>

      <button className="btn-carrito" onClick={clear}>
        Vaciar carrito
      </button>

      <hr></hr>

      <Form className="formulario">
        <Form.Group className="mb-3">
          <Form.Label> Direccion Email</Form.Label>
          <Form.Control
            type="email"
            value={buyer.email}
            onChange={handleChange}
            name="email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="Text"
            value={buyer.name}
            onChange={handleChange}
            name="name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="Text"
            value={buyer.phone}
            onChange={handleChange}
            name="phone"
            required
          />
        </Form.Group>
        <button className="btn-comprar" type="submit" onClick={sendOrder}>
          Comprar
        </button>
      </Form>
    </Container>
  );
};
