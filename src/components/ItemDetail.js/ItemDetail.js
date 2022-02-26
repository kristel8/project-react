import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../CartContext/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ({ id, nombre, autor, img, descripcion, precio, stock, categoria }) => {
    const [cantidad, setCantidad] = useState(0)
    const { agregarAlCarrito } = useContext(CartContext)
    const [ contador, setContador ] = useState(0);

    const onAdd = ( elemento ) => {
        if (cantidad === 0) return

        if (!contador) {
            const addItem = {
                id, nombre, precio, stock, cantidad
            }
            setContador(elemento);
            agregarAlCarrito(addItem)
        }
    }

    return (
        <div>
            <h3>{nombre}</h3>
            <img src={img} alt={nombre} />
            <h4>{autor}</h4>
            <h6>{categoria}</h6>
            <span>{descripcion}</span>
            <h5>Precio: ${precio}</h5>

            {
                contador
                    ? <Link to="/cart" className="btn btn-success my-3">
                        Terminar mi compra
                    </Link>
                    :
                    <>
                        <ItemCount
                            max={stock}
                            counter={cantidad}
                            setCounter={setCantidad}
                            contador={contador}
                            onAdd={onAdd}
                        />
                    </>

            }

        </div>
    )
}