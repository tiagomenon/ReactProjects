import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getByIdProductos } from "../Api/ApiService";
import { Card, Button } from "react-bootstrap";
function Detalle() {
    const { id } = useParams();
    console.log("id producto", id);
    const [producto, setProducto] = useState({});
    useEffect(() => {
        const request = async () => {
            try {
                const response = await getByIdProductos(id);
                console.log("response", response);
                setProducto(response.data);
            } catch (e) {
                console.log(e);
            }
        };
        request();
    }, [id]);
    const comprar = (id) => {
        console.log("id", id);
    };
    return (
        <>
            <div>
                <Card style={{ width: "18rem", margin: "auto" }}>
                    <Card.Body>
                        <Card.Title>{producto.title}</Card.Title>
                        <Card.Text>
                            <Card.Img variant="top" src={producto.thumbnail} />
                            <b>Precio: </b>
                            {producto.price}
                        </Card.Text>
                        <Card.Text>
                            <b>Sku: </b>
                            {producto.id}
                        </Card.Text>
                        <Button onClick={() => comprar(id)}>Comprar</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default Detalle;
