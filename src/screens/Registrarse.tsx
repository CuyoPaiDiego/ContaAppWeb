import { useState } from 'react'

import logo from '../logos/logo-removebg-preview.png';

import '../themes/stylesGlobal.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ display: "flex", flexDirection: "column", }} >


      <div className='header'>
        <div className='contenedorLogoHeaderIzq'>
          <img src={logo} className="logo" alt="Vite logo" />
        </div>
        <div className='contenedorTituloHeader'>
          <h1 className='titulo'>Ingresa tu matrícula</h1>
        </div>
        <div className='contenedorLogoHeaderDer'>
          {/* <img src={logo} className="logo" alt="Vite logo" /> */}
        </div>
      </div>

      <div className='bodyRegistro'>
        
        <div className="form-containerRegistro">
          <div className="form-itemRegistro">
            
            <input type="text" id="nombre" placeholder="Ingrese su matrícula" />
          </div>
          
        </div>
        
      </div>
      <div className="submit-buttonRegistro">
        <button className='botonRegistro' type="button">Enviar</button>
      </div>

    </div>
  )
}


export default App
