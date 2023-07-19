import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Navlink from'react-bootstrap/Navlink'

function NavigationBar() {
  return (
    <Navbar className='bg-body-tertiary'>
      <Link to='/'>Home</Link>
      |
      <Link to='/new'>New</Link>
    </Navbar>
  )
}

export default NavigationBar