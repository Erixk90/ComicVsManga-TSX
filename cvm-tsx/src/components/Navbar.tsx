
import '../App.css'

const Navbar = () => {
  return (
    <div className='navbarContent'  >
    <p>Logo</p>
    <input type="text" />
    <nav >
      <ul className='navContainer'>
        <li className='navContent'>comics</li>
        <li className='navContent'>Manga</li>
        <li className='navContent'>Tienda</li>
        <li className='navContent'>Login</li>
        <li className='navContent'>Sign Up</li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar