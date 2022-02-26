import React from 'react'

export const ItemCount = ({  max, min = 0, counter, setCounter, onAdd }) => {

    const handleSumar = (e) => {
        counter < max && setCounter(counter + 1)
    }

    const handleRestar = () => {
        counter > min && setCounter(counter - 1)
    }

    return (
        <>
            <div>
                <button className="btn btn-outline-primary" onClick={handleRestar}>-</button>
                <span className="mx-3">{counter}</span>
                <button className="btn btn-primary" onClick={handleSumar}>+</button>
            </div>

            <button
                className="btn btn-success my-2"
                onClick={ () => onAdd( counter )}
            >
                Agregar al carrito
            </button>
        </>
    )
}
