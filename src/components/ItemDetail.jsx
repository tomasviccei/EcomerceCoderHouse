import Card from "react-bootstrap/Card";

export const ItemDetail = ({ item }) => {
  return (
    <Card style={{ width: "30rem" }}>
      <Card.Title>{item.title}</Card.Title>
      <Card.Img variant="top" src={item.pictureUrl} />
      <Card.Body></Card.Body>
    </Card>
  );
};
