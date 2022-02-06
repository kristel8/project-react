import React from 'react';

export const Contenedor = ( {children} ) => {

    const styles = {
        margin: '0 auto',
        maxWidth: '1000px'
    }

    return (
            <section style={styles}>
                {children}
            </section>
        )
};
