import React from 'react';
import { Nav } from "react-bootstrap"

export const ItemNavBar = ({ nombreItem, estadoItem }) => {
    return (
        <Nav.Link href="#home">{ nombreItem }</Nav.Link>
    );
};
