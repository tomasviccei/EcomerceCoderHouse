import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { ItemDetail } from "./ItemDetail";

import { getFirestore, doc, getDoc } from "firebase/firestore";

import "./css/ItemListCont.css"

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const { id } = useParams();


 useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "items", id);

    getDoc(refDoc).then((snapshot) => {
      setItem({ id: snapshot.id, ...snapshot.data() });
    });
  }, [id]);

  return (
    <Container className="detail-container">
      {item ? <ItemDetail className="detail"item={item} /> : <>loading</>} 
    </Container>
  );
};
