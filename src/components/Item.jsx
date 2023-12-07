import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./css/ItemList.css";

export const Item = ({ item }) => {
  return (
    <Card >
      <Card.Img variant="top" height={320} src={item.pictureUrl} />
      <Card.Body className="card-body">
        <Card.Title style={{ color: "#fff", fontSize: "25px" }}>
          {item.title}
        </Card.Title>
        <Card.Text style={{ color: "#fff" }}>{item.description}</Card.Text>
        <Link to={`/items/${item.id}`}>
          <button  className="btn-ir">Saber Mas</button>
        </Link>
      </Card.Body>
    </Card>
  );
};
