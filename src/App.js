
import './App.css';
import Dinos from './components/Dinos';
import Footer from './components/Footer';
import Header from './components/Header';
import Portada from './components/Portada';
import Separador from './components/Separador';

const Dinosaurios_API = [
  {id: 1, nombre:'Tiranosaurio'},
  {id: 2, nombre:'Arqueoptérix'},
  {id: 3, nombre:'Apatosaurio'},
  {id: 4, nombre:'Velociraptor'},
  {id: 5, nombre:'Parasaurolofus'},
  {id: 6, nombre:'Iguanodon'},
  {id: 7, nombre:'Spinosaurus'},
  {id: 8, nombre:'Stegosaurus'}
]

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <Header 
        texto="ArkeoDino"
        />

        <Portada/>

        <Separador
          texto="Muestrario de dinosaurios"
        />

        <Dinos 
        texto="Cuidado donde picas, pueden morder..."
        LDinos={Dinosaurios_API}/>

        <Footer className="container-footer"
          texto="Equipo 12"
        />
      </div>
    </div>
  );
}

export default App;
