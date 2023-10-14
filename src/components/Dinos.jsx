import React from "react";
import './Dinos.component.css'
import PropTypes from 'prop-types'

const handleClick =()=>{
  alert('!Gruagjj, hum, hum!');
};

class Dinos extends React.Component{
  
    render(){
        const {LDinos} = this.props;
        return(
            <div>
              <p className="Dinos_h1">{this.props.texto}</p>
            {LDinos.map((elemento) => (
              <div key={elemento.id}>
                {elemento.nombre}
              </div>
            ))}
            <button className="dinos_button" onClick={handleClick}>Cajita</button>
          </div>
        );
    };
}

Dinos.defaultProps = {
  texto:"Mordida imperial."
}

Dinos.propTypes={
  texto:PropTypes.string
}

export default Dinos;
