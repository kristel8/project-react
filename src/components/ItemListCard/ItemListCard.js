import React from 'react';
import { Contenedor } from '../Contenedor/Contenedor';
import { ItemCard } from '../ItemCard/ItemCard';
export const ItemListCard = ( {productos} ) => {

    return (
        <Contenedor>    
            <h2>Productos</h2>   
            <hr/>
            <div className="row">
                { productos.map( (el) => <ItemCard key={el.id} {...el}/> )}
            </div> 
        </Contenedor>
    )
}