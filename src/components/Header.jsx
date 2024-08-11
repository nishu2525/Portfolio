import { Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const path =useLocation().pathname
  return (
    <div className="sticky top-0 z-50 bg-primary flex justify-between items-center">
   <Navbar  className="lg:mx-[35rem] bg-primary w-full">
         <Navbar.Toggle />
        <Navbar.Collapse>
        <Navbar.Link active={path==='/'} className="text-lg text-secondary hover:text-teal" as={"div"}>
          <Link to='/' >Home</Link>
        </Navbar.Link>
      <Navbar.Link active={path==='/About'} className="text-lg text-secondary  hover:text-teal" as={"div"}>
          <Link to='/About' >About</Link>
        </Navbar.Link>
        <Navbar.Link active={path==='/Experince'} className="text-lg text-secondary  hover:text-teal" as={"div"}>
          <Link to='/Experince' >Experince</Link>
        </Navbar.Link>
        <Navbar.Link active={path==='/Project'} className="text-lg text-secondary  hover:text-teal" as={"div"}>
          <Link to='/Project' >Project</Link>
        </Navbar.Link>
        <Navbar.Link active={path==='/Contact'} className="text-lg text-secondary  hover:text-teal" as={"div"}>
          <Link to='/Contact' >Contact</Link>
        </Navbar.Link>
        </Navbar.Collapse>
   </Navbar>
    </div>
  )
}


// Home , About , Experince , Project , Contact me 