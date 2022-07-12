import { Link } from "react-router-dom";
import { Card, Button, Col } from "react-bootstrap";

const styles = {
    img: {
        width: "100px",
        backgroundColor: "red",
        height: "150px",
    },
};
function Logic2(props) {
    console.log("props", props);
    const { nombre, descripcion, precio, sku, id, img } = props;
    return (
        <>
            <div>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>{nombre}</Card.Title>
                            <Card.Img
                                variant="top"
                                src={img}
                                style={styles.img}
                            />
                            {precio && <Card.Text>{precio}</Card.Text>}
                            {descripcion && (
                                <Card.Text>{descripcion}</Card.Text>
                            )}
                            {sku && <Card.Text>{sku}</Card.Text>}
                            <Button
                                variant="primary"
                                as={Link}
                                to={"/producto/" + id}
                            >
                                Ver detalle
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </>
    );
}

export default Logic2;
