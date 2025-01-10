import { Nav } from "react-bootstrap"

function Navbar() {
  return (
    <div>
      <Nav className="flex-column">
        <Nav.Link href="#home" className="text-white">
          Home
        </Nav.Link>
        <Nav.Link href="#profile" className="text-white">
          Profile
        </Nav.Link>
        <Nav.Link href="#settings" className="text-white">
          Settings
        </Nav.Link>
        <Nav.Link href="#about" className="text-white">
          About
        </Nav.Link>
      </Nav>
    </div>
  )
}

export default Navbar
