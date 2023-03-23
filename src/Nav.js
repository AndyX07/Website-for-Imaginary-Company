import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div class = "container">
        <h1 id = "titleNavbar">Universal Computer Solutions</h1>
        <nav class = "navbar">
            <ul>
                <li><Link to = '/'>Home</Link></li>
                <li><Link to = '/services'>Services</Link></li>
                <li><Link to = '/about'>About Us</Link></li>
                <li><Link to = '/cart'>Cart</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav