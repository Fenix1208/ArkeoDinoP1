import React from "react";
import './Footer.component.css'
import PropTypes from 'prop-types'


class Footer extends React.Component{
    render(){
        return(
            <div className="Contenedor_footer">
                <p className="texto_footer">{this.props.texto}</p>
            </div>
        );
    }
}

Footer.defaultProps = {
    texto:"ArkeoDino.com"
}

Footer.propTypes={
    texto:PropTypes.string
}

export default Footer;
