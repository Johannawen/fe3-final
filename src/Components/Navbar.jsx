import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal)

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' })
  }

  return (
    <nav className={state.theme}>
      {/* Aqui deberan agregar los links correspondientes a las rutas definidas */}
      <Link to="/">Home</Link>
      <Link to="/contacto">Contact</Link>
      <Link to="/favs">Favs</Link>
      
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar