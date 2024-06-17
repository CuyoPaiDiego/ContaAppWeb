import { useState } from 'react'

import logo from './logos/logo-removebg-preview.png';

import './themes/stylesGlobal.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ display: "flex", flexDirection: "column", }} >


      <div className='header'>
        <div className='contenedorLogoHeaderIzq'>
          <img src={logo} className="logo" alt="Vite logo" />
        </div>
        <div className='contenedorTituloHeader'>
          <h1 className='titulo'>Ingresa tus datos</h1>
        </div>
        <div className='contenedorLogoHeaderDer'>
          {/* <img src={logo} className="logo" alt="Vite logo" /> */}
        </div>
      </div>

      <div className='body'>
        
        <div className="form-container">
          <div className="form-item">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" placeholder="Ingrese su nombre" />
          </div>
          <div className="form-item">
            <label htmlFor="apellidos">Apellidos</label>
            <input type="text" id="apellidos" placeholder="Ingrese sus apellidos" />
          </div>
          <div className="form-item">
            <label htmlFor="grupo">Grupo</label>
            <input type="text" id="grupo" placeholder="Ingrese su grupo" />
          </div>
          <div className="form-item">
            <label htmlFor="contrasena">Contraseña</label>
            <input type="password" id="contrasena" placeholder="Ingrese su contraseña" />
          </div>
          <div className="form-item">
            <label htmlFor="confirmar-contrasena">Confirmar Contraseña</label>
            <input type="password" id="confirmar-contrasena" placeholder="Confirme su contraseña" />
          </div>
        </div>
        
      </div>
      <div className="submit-button">
        <button className='boton' type="button">Registrarme</button>
      </div>

    </div>
  )
}


export default App
