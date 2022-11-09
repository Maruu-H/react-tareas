import './App.css';
import FreeCodeCampLogo from './imagenes/FreeCodeCampLogo.png';
import ListaDeTareas from './componentes/ListaDeTareas.js'

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={FreeCodeCampLogo}
          className='freecodecamp-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
