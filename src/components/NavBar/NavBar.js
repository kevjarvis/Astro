import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget";
import { useEffect, useState } from 'react';
import { firestoreDB } from '../../services/firebase';
import { getDocs, collection } from 'firebase/firestore';

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getDocs(collection(firestoreDB, 'categories')).then(res => {
      const categories = res.docs.map(cat => {
        return {id: cat.id, ...cat.data()}
      })

      setCategories(categories);
    })

  }, [])

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
          {categories.map(cat => 
            <li key={cat.id}><NavLink to={'/category/'+ cat.id} className={({ isActive }) => (isActive ? 'isActive' : null)} >{cat.description}</NavLink></li>
          )}
        </ul>
      </div>

      <div>
        <ul className={'Navbar-buttons'}>
          <li><Link to="/cart"><CartWidget /></Link></li>
          <li><Link to="/" className={'catalogButton'}>Ver catálogo</Link></li>
        </ul>
      </div>

    </nav>
  );
}

export default NavBar;