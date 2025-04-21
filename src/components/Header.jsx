import { Navbar } from "flowbite-react";
import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
  const path = useLocation().pathname;
  const wrapperRef = useRef(null); // Ref now on wrapping div

  const navItems = [
    { id: "home-section", label: "Home" },
    { id: "about-section", label: "About" },
    { id: "experience-section", label: "Experience" },
    { id: "project-section", label: "Project" },
    { id: "contact-section", label: "Contact Me" },
  ];

  const collapseNavbar = () => {
    if (window.innerWidth < 1024 && wrapperRef.current) {
      const toggleButton = wrapperRef.current.querySelector("button[data-collapse-toggle]");
      const menu = wrapperRef.current.querySelector("ul");

      if (toggleButton && menu?.classList.contains("block")) {
        toggleButton.click();
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        window.innerWidth < 1024 &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        collapseNavbar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="sticky top-0 z-50 bg-primary flex justify-between items-center">
      <Navbar className="lg:mx-[30rem] bg-primary w-full">
        <Navbar.Toggle />
        <Navbar.Collapse>
          {navItems.map(({ id, label }) => (
            <Navbar.Link as="div" key={id}>
              <ScrollLink
                to={id}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setTimeout(collapseNavbar, 500)}
                className="block cursor-pointer text-lg font-normal text-secondary hover:text-teal hover:border-b-2 hover:border-teal hover:delay-3000"
              >
                {label}
              </ScrollLink>
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
