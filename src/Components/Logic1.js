import React, { useState, useEffect } from "react";
import Logic2 from "./Logic2";
import { getAllProductos } from "../Api/ApiService";
import { Button, Row } from "react-bootstrap";

function Logic1() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [buscar, setBuscar] = useState("hawking");

    useEffect(() => {
        const request = async () => {
            try {
                const response = await getAllProductos(buscar);
                setProductos(response.data.results);
                console.log("response", response.data.results);
            } catch (e) {
                console.log(e);
            }
        };
        request();
    }, [buscar]);

    return (
        <div>
            <Row>
                <div>
                    {productos.slice(0, 5).map((producto) => {
                        return (
                            <Logic2
                                key={producto.id}
                                nombre={producto.title}
                                img={producto.thumbnail}
                                id={producto.id}
                            />
                        );
                    })}
                </div>
            </Row>
        </div>
    );
}
export default Logic1;
