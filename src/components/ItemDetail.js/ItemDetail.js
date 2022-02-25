import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../CartContext/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ({ id, nombre, autor, img, desc, precio, stock, categoria }) => {
    const [cantidad, setCantidad] = useState(0)
    const { agregarAlCarrito, isInCart } = useContext(CartContext)


    const onAdd = (e) => {
        console.log(e)
        if (cantidad === 0) return

        // if (!isInCart(id)) {

        // }

        const addItem = {
            id, nombre, autor, img, desc, precio, stock, categoria, cantidad
        }
        agregarAlCarrito(addItem)
    }

    return (
        <div>
            <h3>{nombre}</h3>
            <img src={img} alt={nombre} />
            <h4>{autor}</h4>
            <h6>{categoria}</h6>
            <span>{desc}</span>
            <h5>Precio: ${precio}</h5>

            {


                <>

                    <ItemCount
                        max={stock}
                        counter={cantidad}
                        setCounter={setCantidad}
                        onAdd={onAdd}
                    />


                </>
            }

        </div>
    )
}

/*                 isInCart(id)
                    ? <>
                    <Link to="/cart" className="btn btn-success my-3">
                        Terminar mi compra
                    </Link>
                    </>
                    
                    : */