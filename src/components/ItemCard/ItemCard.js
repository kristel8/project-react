import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"


export const ItemCard = ( {id, nombre, autor, precio, img, descripcion, oferta} ) => {

    const precioFinal = oferta ? precio * 0.85 : precio

    return (
        <Card style={{ width: '16rem', margin: '12px'}}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Subtitle>{autor}</Card.Subtitle>
                <Card.Text>
                    {descripcion}
                </Card.Text>
                { oferta &&
                    <>
                        <Card.Title>15% OFF</Card.Title>
                        <Card.Text>Free shipping</Card.Text>
                    </>
                }
                <Card.Text>
                    Precio: ${precio}
                </Card.Text>
                <Link to={`/detail/${id}`}>
                <Button variant="primary">Ver más</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}