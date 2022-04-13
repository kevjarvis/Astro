import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className={'Navbar'}>

      <Link to="/">
        <div className={'Logo'}>
          <img className={'Logo-img'} src={'/assets/Logo.png'} alt="Logotipo de Astro"/>
          <span className={'Logo-text'}>ASTRO</span>
        </div>
      </Link>
      
      <div className={'Navbar-menus'}>
        <ul>
          <li><NavLink to={'/category/aficionado'} className={({ isActive }) => (isActive ? 'isActive' : null)} >Para aficionados</NavLink></li>
          <li><NavLink to={'/category/profesional'} className={({ isActive }) => (isActive ? 'isActive' : null)} >Para profesionales</NavLink></li>
        </ul>
      </div>

      <div>
        <ul className={'Navbar-buttons'}>
          <li><CartWidget /></li>
          <li><a href="#" className={'catalogButton'}>Ver catálogo</a></li>
        </ul>
      </div>

    </nav>
  );
}

export default NavBar;