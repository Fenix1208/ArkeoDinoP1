import React from "react";
import './Separador.css'
import PropTypes from 'prop-types'


function Separador({texto}){

        return(
            <div className="contenedor">
                <header className="header_style">
                    <p className="p">{texto}</p>
                </header>

            </div>
        );
}

Separador.defaultProps = {
    texto: 'Dinos a montones'
}
Separador.propTypes={
    texto:PropTypes.string
}

export default Separador;


