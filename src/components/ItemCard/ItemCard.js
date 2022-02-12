import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"


export const ItemCard = ( {id, nombre, precio, img, descripcion} ) => {

    return (
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    {descripcion}
                </Card.Text>
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